import { ModuleName } from "@/store/abstractions/ModuleName";
import { STORE } from '@/store/index'
import { AuthState } from "@/store/modules/auth/AuthState";
import { AuthActionType } from "@/store/modules/auth/core/types/AuthActionType";
import { AuthGetterType } from "@/store/modules/auth/core/types/AuthGetterType";
import { Store } from "vuex";

export const authRepository = () => {

    const AUTH_STORE = STORE as Store<AuthState>;
    const MODULE_NAME = ModuleName.AuthModule;

    const setTokenAsync = async (payload: string): Promise<void> => {
        await AUTH_STORE.dispatch(`${MODULE_NAME}/${AuthActionType.SetTokenAsync}`, payload);
    };

    const clearTokenAsync = async (): Promise<void> => {
        await AUTH_STORE.dispatch(`${MODULE_NAME}/${AuthActionType.ClearTokenAsync}`);
    };

    const getAuthTokens = (): string => {
        return AUTH_STORE.getters[`${MODULE_NAME}/${AuthGetterType.GetAccessToken}`];
    };

    return {
        setTokenAsync,
        clearTokenAsync,
        getAccessToken: getAuthTokens
    };
};