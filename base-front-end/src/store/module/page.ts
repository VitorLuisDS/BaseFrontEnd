import { Page } from "@/models/Page";
import { Module } from "vuex";
import { State } from "@/store/State"
export interface PageState extends State {
    pages: Page[]
}

const pagesModule: Module<PageState, State> = {
    state: {
        pages: []
    },

    getters: {
        getPages(state: PageState): Page[] {
            return state.pages ?? [];
        }
    },

    mutations: {
        addPage(state: PageState, payload: Page) {
            state.pages.push(payload);
        },
        initializePages(state: PageState) {
            state.pages = [
                new Page('Home'),
                new Page('Login'),
                new Page('About')
            ];
        }
    },

    actions: {
        async addPage({ commit }, payload: Page): Promise<void> {
            commit("addPage", payload);
        },

        async initializePages({ commit }): Promise<void> {
            commit("initializePages");
        }
    },
    namespaced: true
};

export default pagesModule;