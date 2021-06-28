import { PageTest } from "@/models/PageTest";
import { MutationType } from "@/store/abstractions/core/types/MutationType";
import { PageState } from "@/store/modules/page/PageState";
import { MutationTree } from "vuex";

const mutations: MutationTree<PageState> = {
    [MutationType.Add](state: PageState, payload: PageTest) {
        state.pages.push(payload);
    },
    [MutationType.Initialize](state: PageState) {
        state.pages = [
            new PageTest('Home'),
            new PageTest('Login'),
            new PageTest('About')
        ];
    }
};

export default mutations;