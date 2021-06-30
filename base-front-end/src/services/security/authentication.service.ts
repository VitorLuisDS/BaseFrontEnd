import { baseService } from "../abstractions/base.service";
import { authenticationRepository } from "@/repositories/security/authentication.repository";
import { AuthenticationEndpoint } from "../endpoints/AuthenticationEndpoints";
import { User } from "@/models/security/User";
import { ResponseBase } from "@/models/core/ResponseBase";

export const authenticationService = {
    async authenticateAync(user: User): Promise<ResponseBase<string>> {
        await authenticationRepository().clearTokenAsync();
        return await baseService.postAsync<string>(`${process.env.VUE_APP_API_ENDPOINT}/${AuthenticationEndpoint.Authenticate}`, user);
    },

    async renewAccessToken(): Promise<ResponseBase<string>> {
        return await baseService.postAsync<string>(`${process.env.VUE_APP_API_ENDPOINT}/${AuthenticationEndpoint.RenewAccessToken}`);
    },
};