import { State } from "@/store/abstractions/State";
import { ActionTree } from "vuex";
import { AuthenticationState } from "../AuthenticationState";
import { AuthenticationActionType } from "./types/AuthenticationActionType";
import { AuthenticationMutationType } from "./types/AuthenticationMutationType";

export const authenticationActions: ActionTree<AuthenticationState, State> = {
    async [AuthenticationActionType.SetTokenAsync]({ commit }, payload: string) {
        commit(AuthenticationMutationType.SetToken, payload);
    },
    async [AuthenticationActionType.ClearTokenAsync]({ commit }) {
        commit(AuthenticationMutationType.ClearToken);
    },
    async [AuthenticationActionType.SetRenewingTokenAsync]({ commit }, payload: boolean) {
        commit(AuthenticationMutationType.SetRenewingToken, payload);
    },
    async [AuthenticationActionType.SetIsLoginProcessAsync]({ commit }, payload: boolean) {
        commit(AuthenticationMutationType.SetIsLoginProcess, payload);
    },
};