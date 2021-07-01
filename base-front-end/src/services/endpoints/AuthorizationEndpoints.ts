import { PageAuthorizationRequest } from "@/models/security/authorization/PageAuthorizationRequest";

enum AuthorizationEndpointEnum {
    BaseEndpoint = "api/authorization",
    AllowedPageFunctionalities = "allowed-functionalities"
};

export class AuthorizationEndpoint {
    static readonly BaseEndpoint = AuthorizationEndpointEnum.BaseEndpoint;

    static allowedPageFunctionalities(pageAuthorizationRequest: PageAuthorizationRequest) {
        return `${AuthorizationEndpoint.BaseEndpoint}/${pageAuthorizationRequest.moduleCode}/${pageAuthorizationRequest.pageCode}/${AuthorizationEndpointEnum.AllowedPageFunctionalities}`
    }
}