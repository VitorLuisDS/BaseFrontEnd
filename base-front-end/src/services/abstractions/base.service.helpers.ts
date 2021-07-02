import { CorePageCode } from "@/constants/pages-codes/core/CorePageCodes";
import { InvalidTokenResponse } from "@/models/security/authentication/InvalidTokenResponse";
import { InvalidTokenType } from "@/models/security/authentication/InvalidTokenType";
import { TokenType } from "@/models/security/authentication/TokenType";
import { authenticationRepository } from "@/repositories/security/authentication.repository";
import { authorizationRepository } from "@/repositories/security/authorization.repository";
import router from "@/router";
import { authenticationService } from "../security/authentication.service";

const authorizationRepositoryInstance = authorizationRepository();
const authenticationRepositoryInstance = authenticationRepository();

async function canRenewAccessTokenAsync(): Promise<boolean> {
    const accessToken = authenticationRepositoryInstance.getAccessToken();
    const isRenewingToken = await authenticationRepositoryInstance.getRenewingToken();
    const isLoginProcess = await authenticationRepositoryInstance.getIsLoginProcess();

    return !accessToken && !isRenewingToken && !isLoginProcess;
}

async function getAuthorizationHeader(): Promise<string> {
    let accessToken = authenticationRepositoryInstance.getAccessToken();

    if (await canRenewAccessTokenAsync()) {
        await authenticationService.renewAccessTokenAsync();
        accessToken = authenticationRepositoryInstance.getAccessToken();
    }
    if (accessToken) return `Bearer ${accessToken}`;

    return "";
}

function shouldTheAccessTokenBeRenewed(invalidTokenResponse: InvalidTokenResponse): boolean {
    return invalidTokenResponse.tokenType == TokenType.AccessToken && (
        invalidTokenResponse.invalidTokenType == InvalidTokenType.Expired ||
        invalidTokenResponse.invalidTokenType == InvalidTokenType.NotProvided);
}

async function goToLogin(): Promise<void> {
    await authenticationRepositoryInstance.clearAccessTokenAsync();

    const nextPage = authorizationRepositoryInstance.getNextPage();
    if (nextPage)
        await router.push({ name: CorePageCode.Login, query: { redirect: nextPage.pageCode } });
    else
        await router.push({ name: CorePageCode.Login });
}


export const baseServiceHelpers = {
    getAuthorizationHeader,
    shouldTheAccessTokenBeRenewed,
    goToLogin
};