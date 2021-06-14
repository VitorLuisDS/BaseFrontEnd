import { AuthTokens } from "@/models/security/AuthTokens";
import { ModuleName } from "@/store/abstractions/ModuleName";
import { STORE } from '@/store/index'
import { AuthState } from "@/store/modules/auth/AuthState";
import { AuthActionType } from "@/store/modules/auth/core/types/AuthActionType";
import { AuthGetterType } from "@/store/modules/auth/core/types/AuthGetterType";
import { Store } from "vuex";

export const AuthRepository = () => {

    const AUTH_STORE = STORE as Store<AuthState>;
    const MODULE_NAME = ModuleName.AuthModule;

    const setTokenAsync = async (payload: AuthTokens): Promise<void> => {
        await AUTH_STORE.dispatch(`${MODULE_NAME}/${AuthActionType.SetTokensAsync}`, payload);
    };

    const getAuthTokens = (): AuthTokens => {
        return AUTH_STORE.getters[`${MODULE_NAME}/${AuthGetterType.GetAuthTokens}`];
    };

    return {
        setTokenAsync,
        getAuthTokens
    };
};