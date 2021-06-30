import { State } from "@/store/abstractions/State";
import { GetterTree } from "vuex";
import { AuthenticationState } from "../AuthenticationState";
import { AuthenticationGetterType } from "./types/AuthenticationGetterType";

const getters: GetterTree<AuthenticationState, State> = {
    [AuthenticationGetterType.GetAccessToken](state: AuthenticationState): string | null {
        return state.accessToken;
    }
};

export default getters;