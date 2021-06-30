import { Module } from "vuex";
import { State } from "@/store/abstractions/State"
import { AuthenticationState } from "./AuthenticationState";
import AuthGetters from "./core/AuthenticationGetters";
import AuthMutations from "./core/AuthenticationMutations";
import AuthActions from "./core/AuthenticationActions";

const authenticationModule: Module<AuthenticationState, State> = {
    state: {
        accessToken: null
    },

    getters: AuthGetters,

    mutations: AuthMutations,

    actions: AuthActions,

    namespaced: true
};

export default authenticationModule;