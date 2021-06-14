import axios from "axios";
import { AuthRepository } from "@/repositories/security/AuthRepository";

const tokens = AuthRepository().getAuthTokens();

const instance = axios.create({
    headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + tokens?.accessToken,
        refreshtoken: tokens?.refreshToken
    }
});

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