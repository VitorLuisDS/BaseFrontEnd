import { baseService } from "../abstractions/base.service";
import { authenticationRepository } from "@/repositories/security/authentication.repository";
import { AuthenticationEndpoint } from "../endpoints/AuthenticationEndpoints";
import { User } from "@/models/security/User";
import { ResponseBase } from "@/models/core/ResponseBase";
import { AccessToken } from "@/models/security/authentication/AccessToken";

export const authenticationService = {
    async authenticateAync(user: User): Promise<ResponseBase<AccessToken>> {
        await authenticationRepository().clearAccessTokenAsync();
        return await baseService.postAsync<AccessToken>(`${process.env.VUE_APP_API_ENDPOINT}/${AuthenticationEndpoint.Authenticate}`, user);
    },

    async renewAccessTokenAsync(): Promise<ResponseBase<AccessToken>> {
        return await baseService.postAsync<AccessToken>(`${process.env.VUE_APP_API_ENDPOINT}/${AuthenticationEndpoint.RenewAccessToken}`);
    },
};