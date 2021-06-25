import { State } from "@/store/abstractions/State";
import { GetterTree } from "vuex";
import { AuthState } from "../AuthState";
import { AuthGetterType } from "./types/AuthGetterType";

const getters: GetterTree<AuthState, State> = {
    [AuthGetterType.GetAccessToken](state: AuthState): string | null {
        return state.accessToken;
    }
};

export default getters;