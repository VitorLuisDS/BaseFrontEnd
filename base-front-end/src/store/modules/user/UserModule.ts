import { User } from "@/models/User";
import { Module } from "vuex";
import { State } from "@/store/abstractions/State"
import { UserState } from "../../states/UserState";
import { MutationsTypes } from "../../abstractions/MutationsTypes";
import { GettersTypes } from "@/store/abstractions/GettersTypes";
import { ActionsTypes } from "@/store/abstractions/ActionsTypes";
import UserModuleMutations from "./UserModuleMutations";
import UserModuleActions from "./UserModuleActions";
import UserModuleGetters from "./UserModuleGetters";

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