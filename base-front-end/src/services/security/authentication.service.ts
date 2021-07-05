import { baseService } from "../abstractions/base.service";
import { authenticationRepository } from "@/repositories/security/authentication.repository";
import { AuthenticationEndpoint } from "../endpoints/AuthenticationEndpoints";
import { User } from "@/models/security/User";
import { ResponseBase } from "@/models/core/ResponseBase";
import { AccessToken } from "@/models/security/authentication/AccessToken";

const authenticationRepositoryInstance = authenticationRepository();

export const authenticationService = {
    async authenticateAync(user: User): Promise<ResponseBase<AccessToken>> {
        await authenticationRepositoryInstance.clearAccessTokenAsync();
        await authenticationRepositoryInstance.setIsLoginProcessAsync(true);
        return await baseService.postAsync<AccessToken>(`${process.env.VUE_APP_API_ENDPOINT}/${AuthenticationEndpoint.Authenticate}`, user)
            .finally(async () => {
                await authenticationRepositoryInstance.setIsLoginProcessAsync(false);
            });;
    },

    async renewAccessTokenAsync(): Promise<void> {
        await authenticationRepositoryInstance.clearAccessTokenAsync();
        await authenticationRepositoryInstance.setRenewingTokenAsync(true);
        await baseService.postAsync<AccessToken>(`${process.env.VUE_APP_API_ENDPOINT}/${AuthenticationEndpoint.RenewAccessToken}`)
            .then(
                async (response) => {
                    await authenticationRepositoryInstance.setAccessTokenAsync(response.content.accessToken);
                },
                (reason) => Promise.reject(reason))
            .finally(async () => {
                await authenticationRepositoryInstance.setRenewingTokenAsync(false);
            });
    },
};