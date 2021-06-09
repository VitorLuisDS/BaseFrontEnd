import { Page } from "@/models/Page";
import { Module } from "vuex";
import { State } from "@/store/abstractions/State"
import { PageState } from "../../states/PageState";
import { MutationsTypes } from "@/store/abstractions/MutationsTypes";
import { GettersTypes } from "@/store/abstractions/GettersTypes";
import { ActionsTypes } from "@/store/abstractions/ActionsTypes";
import PageModuleMutations from "./PageModuleMutations";

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

    actions: {
        async [ActionsTypes.AddAsync]({ commit }, payload: Page): Promise<void> {
            commit(MutationsTypes.Add, payload);
        },

        async [ActionsTypes.InitializeAsync]({ commit }): Promise<void> {
            commit(MutationsTypes.Initialize);
        }
    },
    namespaced: true
};

export default pageModule;