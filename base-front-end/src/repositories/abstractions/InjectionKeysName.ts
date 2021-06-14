import { AuthTokens } from "@/models/security/AuthTokens";
import { ComputedRef, InjectionKey, Ref } from "vue";

export class InjectionKeysName {
    static getAuthTokens: InjectionKey<AuthTokens> = Symbol('getAuthTokens');
};