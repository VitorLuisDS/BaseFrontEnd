import { PageAuthorization } from "@/models/security/authorization/PageAuthorization";
import { MutationTree } from "vuex";
import { AuthorizationState } from "../AuthorizationState";
import { AuthorizationMutationType } from "./types/AuthorizationMutationType";

export const authorizationMutations: MutationTree<AuthorizationState> = {
    [AuthorizationMutationType.SetCurrentPageAuthorization](state: AuthorizationState, payload: PageAuthorization) {
        state.currentPageAuthorization = payload;
    },
    [AuthorizationMutationType.ClearCurrentPageAuthorization](state: AuthorizationState) {
        state.currentPageAuthorization = null;
    }
};