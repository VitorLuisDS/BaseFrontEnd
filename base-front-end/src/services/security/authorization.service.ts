import { baseService } from "../abstractions/base.service";
import { authorizationRepository } from "@/repositories/security/authorization.repository";
import { AuthorizationEndpoint } from "../endpoints/AuthorizationEndpoints";
import { PageAuthorizationRequest } from "@/models/security/authorization/PageAuthorizationRequest";
import { PageAuthorization } from "@/models/security/authorization/PageAuthorization";
import { StatusCode } from "@/constants/StatusCode";
import { FunctionalityCode } from "@/constants/FunctionalityCode";
import { RouteLocationNormalized } from "vue-router";
import { ModuleCode } from "@/constants/ModuleCode";
import { PageMeta } from "@/constants/page-metas/PageMeta";
import { SecurityPageCode } from "@/constants/pages-codes/security/SecurityPageCode";

const authorizationRepositoryInstance = authorizationRepository();

export const authorizationService = {
    async fillAllowedPageFunctionalitiesAync(pageAuthorizationRequest: PageAuthorizationRequest): Promise<void> {
        await authorizationRepositoryInstance.clearCurrentPageAuthorizationAsync();

        const response = await baseService.getAsync<PageAuthorization>(`${process.env.VUE_APP_API_ENDPOINT}/${AuthorizationEndpoint.allowedPageFunctionalities(pageAuthorizationRequest)}`);

        if (response.statusCode == StatusCode.OK) {
            await authorizationRepositoryInstance.setCurrentPageAuthorizationAsync(response.content);
        }
    },

    canAccessCurrentPage(): boolean {
        const curentPageAuthorization = authorizationRepositoryInstance.getCurrentPageAuthorization();
        if (curentPageAuthorization == null) return false;

        const canAccess = curentPageAuthorization.allowedFunctionalities.some(
            (functionality) =>
                functionality == FunctionalityCode.Consult
        );
        return canAccess;
    },

    async authorizeUserToPageAsync(page: RouteLocationNormalized): Promise<boolean> {
        const pageAuthorizationRequest = new PageAuthorizationRequest(
            page.meta[PageMeta.ModuleCode] as ModuleCode,
            page.meta[PageMeta.PageCode] as SecurityPageCode
        );

        let canAccessPage = false;

        await this.fillAllowedPageFunctionalitiesAync(pageAuthorizationRequest)
            .finally(
                () => {
                    canAccessPage = this.canAccessCurrentPage();
                });

        return canAccessPage;
    }
};