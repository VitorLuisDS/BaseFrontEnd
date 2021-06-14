import { Page } from "@/models/Page";
import { MutationType } from "@/store/abstractions/core/types/MutationType";
import { PageState } from "@/store/modules/page/PageState";
import { MutationTree } from "vuex";

const mutations: MutationTree<PageState> = {
    [MutationType.Add](state: PageState, payload: Page) {
        state.pages.push(payload);
    },
    [MutationType.Initialize](state: PageState) {
        state.pages = [
            new Page('Home'),
            new Page('Login'),
            new Page('About')
        ];
    }
};

export default mutations;