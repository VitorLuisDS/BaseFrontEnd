import { Module } from "vuex";
import { State } from "@/store/abstractions/State"
import { UserState } from "@/store/modules/user/UserState";
import UserModuleMutations from "@/store/modules/user/core/UserMutations";
import UserModuleActions from "@/store/modules/user/core/UserActions";
import UserModuleGetters from "@/store/modules/user/core/UserGetters";

const userModule: Module<UserState, State> = {
    state: {
        users: []
    },

    getters: UserModuleGetters,

    mutations: UserModuleMutations,

    actions: UserModuleActions,

    namespaced: true
};

export default userModule;