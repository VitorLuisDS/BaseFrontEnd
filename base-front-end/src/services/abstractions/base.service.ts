import axios from "axios";
import { authenticationRepository } from "@/repositories/security/authentication.repository";
import router from "@/router";
import { ResponseBase } from "@/models/core/ResponseBase";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    function (config) {
        const accessToken = authenticationRepository().getAccessToken();
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
        if (error.response.status == 401 || error.response.status == 403) await authenticationRepository().clearTokenAsync();
        if (error.response.status == 403) {
            router.push({ name: "Login" });
        }
        return Promise.reject(error);
        // return error;
    }
);

async function getAsync<T>(url: string): Promise<ResponseBase<T>> {
    return await axiosInstance
        .get(url)
        .then(
            (successResponse) => {
                return new ResponseBase<T>(successResponse.data.statusCode, successResponse.data.message, successResponse.data.content);
            },
            (error) => {
                return new ResponseBase<T>(error.response.data.statusCode, error.response.data.message, error.response.data.content);
            });

}

async function postAsync<T>(url: string, payload?: any): Promise<ResponseBase<T>> {
    return await axiosInstance
        .post(url, payload)
        .then(
            (successResponse) => {
                return new ResponseBase<T>(successResponse.data.statusCode, successResponse.data.message, successResponse.data.content);
            },
            (error) => {
                return new ResponseBase<T>(error.response.data.statusCode, error.response.data.message, error.response.data.content);
            });
}

async function putAsync<T>(url: string, payload?: any): Promise<ResponseBase<T>> {
    return await axiosInstance
        .put(url, payload)
        .then(
            (successResponse) => {
                return new ResponseBase<T>(successResponse.data.statusCode, successResponse.data.message, successResponse.data.content);
            },
            (error) => {
                return new ResponseBase<T>(error.response.data.statusCode, error.response.data.message, error.response.data.content);
            });
}

async function deleteAsync<T>(url: string): Promise<ResponseBase<T>> {
    return await axiosInstance
        .delete(url)
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