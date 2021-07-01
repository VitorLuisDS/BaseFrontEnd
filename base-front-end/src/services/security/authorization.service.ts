import { baseService } from "../abstractions/base.service";
import { authorizationRepository } from "@/repositories/security/authorization.repository";
import { AuthorizationEndpoint } from "../endpoints/AuthorizationEndpoints";
import { PageAuthorizationRequest } from "@/models/security/authorization/PageAuthorizationRequest";
import { PageAuthorization } from "@/models/security/authorization/PageAuthorization";
import { StatusCode } from "@/constants/StatusCode";
import { FunctionalityCode } from "@/constants/FunctionalityCode";

export const authorizationService = {
    async fillAllowedPageFunctionalitiesAync(pageAuthorizationRequest: PageAuthorizationRequest): Promise<void> {
        await authorizationRepository().clearCurrentPageAuthorizationAsync();

        const response = await baseService.getAsync<PageAuthorization>(`${process.env.VUE_APP_API_ENDPOINT}/${AuthorizationEndpoint.allowedPageFunctionalities(pageAuthorizationRequest)}`);

        if (response.statusCode == StatusCode.OK) {
            await authorizationRepository().setCurrentPageAuthorizationAsync(response.content);
        }
    },

    canAccessCurrentPage(): boolean {
        const curentPageAuthorization = authorizationRepository().getCurrentPageAuthorization();
        if (curentPageAuthorization == null) return false;

        const canAccess = curentPageAuthorization.allowedFunctionalities.some((functionality) =>
            functionality == FunctionalityCode.Consult
        );
        return canAccess;
    }
};