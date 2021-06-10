import { Page } from "@/models/Page";
import { Action } from "@/store/abstractions/core/Action";
import { ActionsTypes } from "@/store/abstractions/core/types/ActionsTypes";
import { State } from "@/store/abstractions/State";
import { PageState } from "@/store/modules/page/PageState";
import { ActionTree } from "vuex";
import { MutationsTypes } from "@/store/abstractions/core/types/MutationsTypes";

const actions: ActionTree<PageState, State> & Action<Page> = {
    async [ActionsTypes.AddAsync]({ commit }, payload: Page) {
        commit(MutationsTypes.Add, payload);
    },
    async [ActionsTypes.InitializeAsync]({ commit }) {
        commit(MutationsTypes.Initialize);
    },
};

export default actions;