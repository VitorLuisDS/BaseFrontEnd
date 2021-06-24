import axios from "axios";
import { AuthRepository } from "@/repositories/security/AuthRepository";
import { AuthTokens } from "@/models/security/AuthTokens";
import router from "@/router";

const instance = axios.create();

instance.interceptors.request.use(
    function (config) {
        const tokens = AuthRepository().getAuthTokens();
        if (tokens && tokens.accessToken) config.headers.Authorization = `Bearer ${tokens.accessToken}`;
        else config.headers.Authorization = "";

        config.withCredentials = true;

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    async function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        if (response.headers["new_token"]) {
            await AuthRepository().setTokenAsync(new AuthTokens(response.headers["new_token"]));
        }
        return response;
    },
    async function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        if (error.response.status == 401 || error.response.status == 403) await AuthRepository().setTokenAsync(new AuthTokens());
        if (error.response.status == 403) {
            router.push({ name: "Login" });
        }
        return Promise.reject(error);
    }
);

export default {
    async get(url: string) {
        return await instance.get(url);
    },

    async post(url: string, payload?: any) {
        return await instance.post(url, payload);
    },

    async put(url: string, payload?: any) {
        return await instance.put(url, payload);
    },

    async delete(url: string) {
        return await instance.delete(url);
    },
};