import { MutationTree } from "vuex";
import { AuthenticationState } from "../AuthenticationState";
import { AuthenticationMutationType } from "./types/AuthenticationMutationType";

const mutations: MutationTree<AuthenticationState> = {
    [AuthenticationMutationType.SetToken](state: AuthenticationState, payload: string) {
        state.accessToken = payload;
    },
    [AuthenticationMutationType.ClearToken](state: AuthenticationState) {
        state.accessToken = null;
    }
};

export default mutations;