import { Module } from "vuex";
import { State } from "@/store/abstractions/State"
import { PageState } from "../../states/PageState";
import PageModuleMutations from "./PageModuleMutations";
import PageModuleActions from "./PageModuleActions";
import PageModuleGetters from "./PageModuleGetters";

const pageModule: Module<PageState, State> = {
    state: {
        pages: []
    },

    getters: PageModuleGetters,

    mutations: PageModuleMutations,

    actions: PageModuleActions,

    namespaced: true
};

export default pageModule;