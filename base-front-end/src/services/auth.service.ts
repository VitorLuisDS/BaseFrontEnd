import { baseService } from "./abstractions/base.service";
import { User } from "@/models/User";
import { authRepository } from "@/repositories/security/auth.repository";
import { AuthEndpoint } from "./endpoints/AuthEndpoints";

const axiosInstance = baseService.axiosInstance;

export const authService = {
    async authenticateAync(user: User) {
        await authRepository().clearTokenAsync();
        return await axiosInstance.post(`${process.env.VUE_APP_API_ENDPOINT}/${AuthEndpoint.Authenticate}`, user);
    },

    async renewAccessToken() {
        return await axiosInstance.post(`${process.env.VUE_APP_API_ENDPOINT}/${AuthEndpoint.RenewAccessToken}`);
    },
};