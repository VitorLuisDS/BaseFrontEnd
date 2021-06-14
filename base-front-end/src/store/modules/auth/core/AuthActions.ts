import { AuthTokens } from "@/models/security/AuthTokens";
import { State } from "@/store/abstractions/State";
import { ActionTree } from "vuex";
import { AuthState } from "../AuthState";
import { AuthActionType } from "./types/AuthActionType";
import { AuthMutationType } from "./types/AuthMutationType";

const actions: ActionTree<AuthState, State> = {
    async [AuthActionType.SetTokensAsync]({ commit }, payload: AuthTokens) {
        commit(AuthMutationType.SetTokens, payload);
    }
};

export default actions;