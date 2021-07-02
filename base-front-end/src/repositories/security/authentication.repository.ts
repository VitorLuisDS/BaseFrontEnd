import { ModuleName } from "@/store/abstractions/core/ModuleName";
import { STORE } from '@/store/index'
import { AuthenticationState } from "@/store/modules/authentication/AuthenticationState";
import { AuthenticationActionType } from "@/store/modules/authentication/core/types/AuthenticationActionType";
import { AuthenticationGetterType } from "@/store/modules/authentication/core/types/AuthenticationGetterType";
import { Store } from "vuex";

export const authenticationRepository = () => {

    const AUTHENTICATION_STORE = STORE as Store<AuthenticationState>;
    const MODULE_NAME = ModuleName.AuthenticationModule;

    const setAccessTokenAsync = async (payload: string): Promise<void> => {
        await AUTHENTICATION_STORE.dispatch(`${MODULE_NAME}/${AuthenticationActionType.SetTokenAsync}`, payload);
    };

    const clearAccessTokenAsync = async (): Promise<void> => {
        await AUTHENTICATION_STORE.dispatch(`${MODULE_NAME}/${AuthenticationActionType.ClearTokenAsync}`);
    };

    const getAccessToken = (): string | null => {
        return AUTHENTICATION_STORE.getters[`${MODULE_NAME}/${AuthenticationGetterType.GetAccessToken}`];
    };

    const setRenewingTokenAsync = async (payload: boolean): Promise<void> => {
        await AUTHENTICATION_STORE.dispatch(`${MODULE_NAME}/${AuthenticationActionType.SetRenewingTokenAsync}`, payload);
    };

    const getRenewingToken = (): boolean => {
        return AUTHENTICATION_STORE.getters[`${MODULE_NAME}/${AuthenticationGetterType.GetRenewingToken}`];
    };

    const setIsLoginProcessAsync = async (payload: boolean): Promise<void> => {
        await AUTHENTICATION_STORE.dispatch(`${MODULE_NAME}/${AuthenticationActionType.SetIsLoginProcessAsync}`, payload);
    };

    const getIsLoginProcess = (): boolean => {
        return AUTHENTICATION_STORE.getters[`${MODULE_NAME}/${AuthenticationGetterType.GetIsLoginProcess}`];
    };

    return {
        setAccessTokenAsync,
        clearAccessTokenAsync,
        getAccessToken,
        setRenewingTokenAsync,
        getRenewingToken,
        setIsLoginProcessAsync,
        getIsLoginProcess
    };
};