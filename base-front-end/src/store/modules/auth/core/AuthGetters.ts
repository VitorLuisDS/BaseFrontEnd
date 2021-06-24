import { AuthTokens } from "@/models/security/AuthTokens";
import { State } from "@/store/abstractions/State";
import { GetterTree } from "vuex";
import { AuthState } from "../AuthState";
import { AuthGetterType } from "./types/AuthGetterType";

const getters: GetterTree<AuthState, State> = {
    [AuthGetterType.GetAuthTokens](state: AuthState): AuthTokens | null {
        const authToken = state.authTokens;
        if (!authToken || !authToken.accessToken)
            return null;
        return state.authTokens;
    }
};

export default getters;