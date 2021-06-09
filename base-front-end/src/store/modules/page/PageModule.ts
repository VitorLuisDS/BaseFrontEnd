import { Page } from "@/models/Page";
import { Module } from "vuex";
import { State } from "@/store/abstractions/State"
import { PageState } from "../../states/PageState";
import { GettersTypes } from "@/store/abstractions/GettersTypes";
import PageModuleMutations from "./PageModuleMutations";
import PageModuleActions from "./PageModuleActions";

const pageModule: Module<PageState, State> = {
    state: {
        pages: []
    },

    getters: {
        [GettersTypes.GetAll](state: PageState): Page[] {
            return state.pages ?? [];
        }
    },

    mutations: PageModuleMutations,

    actions: PageModuleActions,

    namespaced: true
};

export default pageModule;