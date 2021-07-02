import { Module } from "vuex";
import { State } from "@/store/abstractions/State"
import { AuthenticationState } from "./AuthenticationState";
import { authenticationGetters } from "./core/authentication.getters";
import { authenticationMutations } from "./core/authentication.mutations";
import { authenticationActions } from "./core/authentication.actions";

const authenticationModule: Module<AuthenticationState, State> = {
    state: {
        accessToken: null,
        renewingToken: false
    },

    getters: authenticationGetters,

    mutations: authenticationMutations,

    actions: authenticationActions,

    namespaced: true
};

export default authenticationModule;