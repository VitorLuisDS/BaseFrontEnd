import { Page } from "@/models/Page";
import { Action } from "@/store/abstractions/core/Action";
import { ActionType } from "@/store/abstractions/core/types/ActionType";
import { State } from "@/store/abstractions/State";
import { PageState } from "@/store/modules/page/PageState";
import { ActionTree } from "vuex";
import { MutationType } from "@/store/abstractions/core/types/MutationType";

const actions: ActionTree<PageState, State> & Action<Page> = {
    async [ActionType.AddAsync]({ commit }, payload: Page) {
        commit(MutationType.Add, payload);
    },
    async [ActionType.InitializeAsync]({ commit }) {
        commit(MutationType.Initialize);
    },
};

export default actions;