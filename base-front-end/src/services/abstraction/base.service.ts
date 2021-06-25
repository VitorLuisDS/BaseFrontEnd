import axios from "axios";
import { AuthRepository } from "@/repositories/security/AuthRepository";
import router from "@/router";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    function (config) {
        const accessToken = AuthRepository().getAccessToken();
        if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
        else config.headers.Authorization = "";

        config.withCredentials = true;

        return config;
    },
    function (error) {
        // Do something with request error
        // return Promise.reject(error);
        return error;
    }
);

axiosInstance.interceptors.response.use(
    async function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        return response;
    },
    async function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        if (error.response.status == 401 || error.response.status == 403) await AuthRepository().clearTokenAsync();
        if (error.response.status == 403) {
            router.push({ name: "Login" });
        }
        // return Promise.reject(error);
        return error;
    }
);

export default {
    axiosInstance,

    async get(url: string) {
        return await axiosInstance.get(url);
    },

    async post(url: string, payload?: any) {
        return await axiosInstance.post(url, payload);
    },

    async put(url: string, payload?: any) {
        return await axiosInstance.put(url, payload);
    },

    async delete(url: string) {
        return await axiosInstance.delete(url);
    },
};