import { Module } from "vuex";
import { State } from "@/store/abstractions/State"
import { AuthorizationState } from "./AuthorizationState";
import { authorizationGetters } from "./core/authorization.getters";
import { authorizationMutations } from "./core/authorization.mutations";
import { authorizationActions } from "./core/authorization.actions";

const authorizationModule: Module<AuthorizationState, State> = {
    state: {
        currentPageAuthorization: null
    },

    getters: authorizationGetters,

    mutations: authorizationMutations,

    actions: authorizationActions,

    namespaced: true
};

export default authorizationModule;