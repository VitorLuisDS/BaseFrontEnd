import { ModuleName } from "@/store/abstractions/ModuleName";
import { STORE } from '@/store/index'
import { AuthenticationState } from "@/store/modules/authentication/AuthenticationState";
import { AuthenticationActionType } from "@/store/modules/authentication/core/types/AuthenticationActionType";
import { AuthenticationGetterType } from "@/store/modules/authentication/core/types/AuthenticationGetterType";
import { Store } from "vuex";

export const authenticationRepository = () => {

    const AUTH_STORE = STORE as Store<AuthenticationState>;
    const MODULE_NAME = ModuleName.AuthModule;

    const setTokenAsync = async (payload: string): Promise<void> => {
        await AUTH_STORE.dispatch(`${MODULE_NAME}/${AuthenticationActionType.SetTokenAsync}`, payload);
    };

    const clearTokenAsync = async (): Promise<void> => {
        await AUTH_STORE.dispatch(`${MODULE_NAME}/${AuthenticationActionType.ClearTokenAsync}`);
    };

    const getAuthTokens = (): string => {
        return AUTH_STORE.getters[`${MODULE_NAME}/${AuthenticationGetterType.GetAccessToken}`];
    };

    return {
        setTokenAsync,
        clearTokenAsync,
        getAccessToken: getAuthTokens
    };
};