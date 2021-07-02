import { State } from "@/store/abstractions/State";
import { GetterTree } from "vuex";
import { AuthenticationState } from "../AuthenticationState";
import { AuthenticationGetterType } from "./types/AuthenticationGetterType";

export const authenticationGetters: GetterTree<AuthenticationState, State> = {
    [AuthenticationGetterType.GetAccessToken](state: AuthenticationState): string | null {
        return state.accessToken;
    },
    [AuthenticationGetterType.GetRenewingToken](state: AuthenticationState): boolean {
        return state.renewingToken;
    }
};