import { Module } from "vuex";
import { State } from "@/store/abstractions/State"
import { PageState } from "@/store/modules/page/PageState";
import PageModuleMutations from "@/store/modules/page/core/PageMutations";
import PageModuleActions from "@/store/modules/page/core/PageActions";
import PageModuleGetters from "@/store/modules/page/core/PageGetters";

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