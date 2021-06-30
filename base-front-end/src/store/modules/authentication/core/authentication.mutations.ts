import { MutationTree } from "vuex";
import { AuthenticationState } from "../AuthenticationState";
import { AuthenticationMutationType } from "./types/AuthenticationMutationType";

export const authenticationMutations: MutationTree<AuthenticationState> = {
    [AuthenticationMutationType.SetToken](state: AuthenticationState, payload: string) {
        state.accessToken = payload;
    },
    [AuthenticationMutationType.ClearToken](state: AuthenticationState) {
        state.accessToken = null;
    }
};