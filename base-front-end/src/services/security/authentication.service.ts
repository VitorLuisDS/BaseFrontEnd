import { baseService } from "../abstractions/base.service";
import { authenticationRepository } from "@/repositories/security/authentication.repository";
import { AuthenticationEndpoint } from "../endpoints/AuthenticationEndpoints";
import { User } from "@/models/security/User";

const axiosInstance = baseService.axiosInstance;

export const authenticationService = {
    async authenticateAync(user: User) {
        await authenticationRepository().clearTokenAsync();
        return await axiosInstance.post(`${process.env.VUE_APP_API_ENDPOINT}/${AuthenticationEndpoint.Authenticate}`, user);
    },

    async renewAccessToken() {
        return await axiosInstance.post(`${process.env.VUE_APP_API_ENDPOINT}/${AuthenticationEndpoint.RenewAccessToken}`);
    },
};