import { Page } from "@/models/Page";
import { Mutation } from "@/store/abstractions/Mutation";
import { MutationsTypes } from "@/store/abstractions/core/types/MutationsTypes";
import { PageState } from "@/store/modules/page/PageState";
import { MutationTree } from "vuex";

const mutations: MutationTree<PageState> & Mutation<PageState> = {
    [MutationsTypes.Add](state: PageState, payload: Page) {
        state.pages.push(payload);
    },
    [MutationsTypes.Initialize](state: PageState) {
        state.pages = [
            new Page('Home'),
            new Page('Login'),
            new Page('About')
        ];
    }
};

export default mutations;