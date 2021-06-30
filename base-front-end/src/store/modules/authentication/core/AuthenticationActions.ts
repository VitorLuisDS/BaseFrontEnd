import { State } from "@/store/abstractions/State";
import { ActionTree } from "vuex";
import { AuthenticationState } from "../AuthenticationState";
import { AuthenticationActionType } from "./types/AuthenticationActionType";
import { AuthenticationMutationType } from "./types/AuthenticationMutationType";

const actions: ActionTree<AuthenticationState, State> = {
    async [AuthenticationActionType.SetTokenAsync]({ commit }, payload: string) {
        commit(AuthenticationMutationType.SetToken, payload);
    },
    async [AuthenticationActionType.ClearTokenAsync]({ commit }) {
        commit(AuthenticationMutationType.ClearToken);
    }
};

export default actions;