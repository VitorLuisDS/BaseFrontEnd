import { Page } from "@/models/security/authorization/Page";
import { PageAuthorization } from "@/models/security/authorization/PageAuthorization";
import { ModuleName } from "@/store/abstractions/core/ModuleName";
import { STORE } from '@/store/index'
import { AuthorizationState } from "@/store/modules/authorization/AuthorizationState";
import { AuthorizationActionType } from "@/store/modules/authorization/core/types/AuthorizationActionType";
import { AuthorizationGetterType } from "@/store/modules/authorization/core/types/AuthorizationGetterType";
import { Store } from "vuex";

export const authorizationRepository = () => {

    const AUTHORIZATION_STORE = STORE as Store<AuthorizationState>;
    const MODULE_NAME = ModuleName.AuthorizationModule;

    const setCurrentPageAuthorizationAsync = async (payload: PageAuthorization): Promise<void> => {
        await AUTHORIZATION_STORE.dispatch(`${MODULE_NAME}/${AuthorizationActionType.SetCurrentPageAuthorizationAsync}`, payload);
    };

    const clearCurrentPageAuthorizationAsync = async (): Promise<void> => {
        await AUTHORIZATION_STORE.dispatch(`${MODULE_NAME}/${AuthorizationActionType.ClearCurrentPageAuthorizationAsync}`);
    };

    const getCurrentPageAuthorization = (): PageAuthorization => {
        return AUTHORIZATION_STORE.getters[`${MODULE_NAME}/${AuthorizationGetterType.GetCurrentPageAuthorization}`];
    };

    const getNextPage = (): Page => {
        return AUTHORIZATION_STORE.getters[`${MODULE_NAME}/${AuthorizationGetterType.GetNextPage}`];
    };

    const setNextPageAsync = async (payload: Page): Promise<void> => {
        await AUTHORIZATION_STORE.dispatch(`${MODULE_NAME}/${AuthorizationActionType.SetNextPageAsync}`, payload);
    };

    const clearNextPageAsync = async (): Promise<void> => {
        await AUTHORIZATION_STORE.dispatch(`${MODULE_NAME}/${AuthorizationActionType.ClearNextPageAsync}`);
    };

    return {
        setCurrentPageAuthorizationAsync,
        clearCurrentPageAuthorizationAsync,
        getCurrentPageAuthorization,
        setNextPageAsync,
        clearNextPageAsync,
        getNextPage
    };
};