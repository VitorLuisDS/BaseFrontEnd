import { MutationTree } from "vuex";
import { AuthState } from "../AuthState";
import { AuthMutationType } from "./types/AuthMutationType";

const mutations: MutationTree<AuthState> = {
    [AuthMutationType.SetToken](state: AuthState, payload: string) {
        state.accessToken = payload;
    },
    [AuthMutationType.ClearToken](state: AuthState) {
        state.accessToken = null;
    }
};

export default mutations;