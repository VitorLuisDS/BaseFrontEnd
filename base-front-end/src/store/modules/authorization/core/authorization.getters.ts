import { PageAuthorization } from "@/models/security/authorization/PageAuthorization";
import { State } from "@/store/abstractions/State";
import { GetterTree } from "vuex";
import { AuthorizationState } from "../AuthorizationState";
import { AuthorizationGetterType } from "./types/AuthorizationGetterType";

export const authorizationGetters: GetterTree<AuthorizationState, State> = {
    [AuthorizationGetterType.GetCurrentPageAuthorization](state: AuthorizationState): PageAuthorization | null {
        return state.currentPageAuthorization;
    }
};