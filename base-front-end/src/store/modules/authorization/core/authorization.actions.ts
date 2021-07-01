import { PageAuthorization } from "@/models/security/authorization/PageAuthorization";
import { State } from "@/store/abstractions/State";
import { ActionTree } from "vuex";
import { AuthorizationState } from "../AuthorizationState";
import { AuthorizationActionType } from "./types/AuthorizationActionType";
import { AuthorizationMutationType } from "./types/AuthorizationMutationType";

export const authorizationActions: ActionTree<AuthorizationState, State> = {
    async [AuthorizationActionType.SetCurrentPageAuthorizationAsync]({ commit }, payload: PageAuthorization) {
        commit(AuthorizationMutationType.SetCurrentPageAuthorization, payload);
    },
    async [AuthorizationActionType.ClearCurrentPageAuthorizationAsync]({ commit }) {
        commit(AuthorizationMutationType.ClearCurrentPageAuthorization);
    }
};