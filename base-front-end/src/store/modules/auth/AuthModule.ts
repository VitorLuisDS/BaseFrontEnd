import { Module } from "vuex";
import { State } from "@/store/abstractions/State"
import { AuthState } from "./AuthState";
import AuthGetters from "./core/AuthGetters";
import AuthMutations from "./core/AuthMutations";
import AuthActions from "./core/AuthActions";

const authModule: Module<AuthState, State> = {
    state: {
        accessToken: null
    },

    getters: AuthGetters,

    mutations: AuthMutations,

    actions: AuthActions,

    namespaced: true
};

export default authModule;