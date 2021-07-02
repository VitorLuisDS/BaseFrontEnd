import axios, { AxiosRequestConfig } from "axios";
import { ResponseBase } from "@/models/core/ResponseBase";
import { StatusCode } from "@/constants/StatusCode";
import { authenticationService } from "../security/authentication.service";
import { InvalidTokenResponse } from "@/models/security/authentication/InvalidTokenResponse";
import { baseServiceHelpers } from "./base.service.helpers";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    async function (config) {

        config.headers.Authorization = await baseServiceHelpers.getAuthorizationHeader();
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
                let userNeedsToLogin = false;
                const invalidTokenResponse = error.response.data.content as InvalidTokenResponse;

                if (invalidTokenResponse && baseServiceHelpers.shouldTheAccessTokenBeRenewed(invalidTokenResponse)) {
                    await authenticationService.renewAccessTokenAsync()
                        .then(
                            async () => {
                                return await axiosInstance.request(error.config);
                            },
                            () => userNeedsToLogin = true);
                }
                else
                    userNeedsToLogin = true;
                if (userNeedsToLogin) { await baseServiceHelpers.goToLogin(); return; }
                break;
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