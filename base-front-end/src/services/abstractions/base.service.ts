import axios, { AxiosRequestConfig } from "axios";
import { authenticationRepository } from "@/repositories/security/authentication.repository";
import router from "@/router";
import { ResponseBase } from "@/models/core/ResponseBase";
import { StatusCode } from "@/constants/StatusCode";
import { authenticationService } from "../security/authentication.service";
import { authorizationRepository } from "@/repositories/security/authorization.repository";
import { InvalidTokenResponse } from "@/models/security/authentication/InvalidTokenResponse";
import { TokenType } from "@/models/security/authentication/TokenType";
import { InvalidTokenType } from "@/models/security/authentication/InvalidTokenType";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    async function (config) {
        let accessToken = authenticationRepository().getAccessToken();

        const isRenewingToken = await authenticationRepository().getRenewingToken();
        if (!accessToken && !isRenewingToken) {
            await authenticationRepository().setRenewingTokenAsync(true);
            await authenticationService.renewAccessTokenAsync();
            accessToken = authenticationRepository().getAccessToken();
            await authenticationRepository().setRenewingTokenAsync(false);
        }
        if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
        else config.headers.Authorization = "";

        config.withCredentials = true;

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    async function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        return response;
    },
    async function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        switch (error.response.status) {
            case StatusCode.Unauthorized: {
                const invalidTokenResponse = error.response.data.content as InvalidTokenResponse;

                if (invalidTokenResponse) {
                    if (invalidTokenResponse.tokenType == TokenType.AccessToken && (
                        invalidTokenResponse.invalidTokenType == InvalidTokenType.Expired ||
                        invalidTokenResponse.invalidTokenType == InvalidTokenType.NotProvided)) {
                        await authenticationRepository().clearAccessTokenAsync();
                        const response = await authenticationService.renewAccessTokenAsync();
                        if (response.statusCode == StatusCode.OK) {
                            await authenticationRepository().setAccessTokenAsync(response.content.access_token);
                            return await axiosInstance.request(error.config);
                        } else {
                            await authenticationRepository().clearAccessTokenAsync();
                            const nextPage = authorizationRepository().getNextPage();
                            if (nextPage)
                                await router.push({ name: "Login", query: { redirect: nextPage.pageCode } });
                            else
                                await router.push({ name: "Login" });
                            return;
                        }
                    }
                    else {
                        await authenticationRepository().clearAccessTokenAsync();
                        const nextPage = authorizationRepository().getNextPage();
                        if (nextPage)
                            await router.push({ name: "Login", query: { redirect: nextPage.pageCode } });
                        else
                            await router.push({ name: "Login" });
                        return;
                    }
                }
                else {
                    await authenticationRepository().clearAccessTokenAsync();
                    const nextPage = authorizationRepository().getNextPage();
                    if (nextPage)
                        await router.push({ name: "Login", query: { redirect: nextPage.pageCode } });
                    else
                        await router.push({ name: "Login" });
                    return;
                }
            }
        }

        return Promise.reject(error);
        // return error;
    }
);

async function getAsync<T>(url: string, config?: AxiosRequestConfig): Promise<ResponseBase<T>> {
    return await axiosInstance
        .get(url, config)
        .then(
            (successResponse) => {
                return new ResponseBase<T>(successResponse.data.statusCode, successResponse.data.message, successResponse.data.content);
            },
            (error) => {
                return new ResponseBase<T>(error.response.data.statusCode, error.response.data.message, error.response.data.content);
            });

}

async function postAsync<T>(url: string, payload?: any, config?: AxiosRequestConfig): Promise<ResponseBase<T>> {
    return await axiosInstance
        .post(url, payload, config)
        .then(
            (successResponse) => {
                return new ResponseBase<T>(successResponse.data.statusCode, successResponse.data.message, successResponse.data.content);
            },
            (error) => {
                return new ResponseBase<T>(error.response.data.statusCode, error.response.data.message, error.response.data.content);
            });
}

async function putAsync<T>(url: string, payload?: any, config?: AxiosRequestConfig): Promise<ResponseBase<T>> {
    return await axiosInstance
        .put(url, payload, config)
        .then(
            (successResponse) => {
                return new ResponseBase<T>(successResponse.data.statusCode, successResponse.data.message, successResponse.data.content);
            },
            (error) => {
                return new ResponseBase<T>(error.response.data.statusCode, error.response.data.message, error.response.data.content);
            });
}

async function deleteAsync<T>(url: string, config?: AxiosRequestConfig): Promise<ResponseBase<T>> {
    return await axiosInstance
        .delete(url, config)
        .then(
            (successResponse) => {
                return new ResponseBase<T>(successResponse.data.statusCode, successResponse.data.message, successResponse.data.content);
            },
            (error) => {
                return new ResponseBase<T>(error.response.data.statusCode, error.response.data.message, error.response.data.content);
            });
}

export const baseService = {
    axiosInstance,
    getAsync,
    postAsync,
    putAsync,
    deleteAsync
};