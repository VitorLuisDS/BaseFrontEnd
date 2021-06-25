import { State } from "@/store/abstractions/State";
import { ActionTree } from "vuex";
import { AuthState } from "../AuthState";
import { AuthActionType } from "./types/AuthActionType";
import { AuthMutationType } from "./types/AuthMutationType";

const actions: ActionTree<AuthState, State> = {
    async [AuthActionType.SetTokenAsync]({ commit }, payload: string) {
        commit(AuthMutationType.SetToken, payload);
    },
    async [AuthActionType.ClearTokenAsync]({ commit }) {
        commit(AuthMutationType.ClearToken);
    }
};

export default actions;