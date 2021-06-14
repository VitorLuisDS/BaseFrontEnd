import { AuthTokens } from "@/models/security/AuthTokens";
import { MutationTree } from "vuex";
import { AuthState } from "../AuthState";
import { AuthMutationType } from "./types/AuthMutationType";

const mutations: MutationTree<AuthState> = {
    [AuthMutationType.SetTokens](state: AuthState, payload: AuthTokens) {
        state.authTokens = payload;
    }
};

export default mutations;