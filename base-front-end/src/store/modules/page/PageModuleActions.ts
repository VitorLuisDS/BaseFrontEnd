import { Page } from "@/models/Page";
import { Action } from "@/store/abstractions/Action";
import { ActionsTypes } from "@/store/abstractions/ActionsTypes";
import { MutationsTypes } from "@/store/abstractions/MutationsTypes";
import { State } from "@/store/abstractions/State";
import { ActionTree } from "vuex";

const actions: ActionTree<State, State> & Action<Page> = {
    async [ActionsTypes.AddAsync]({ commit }, payload: Page) {
        commit(MutationsTypes.Add, payload);
    },
    async [ActionsTypes.InitializeAsync]({ commit }) {
        commit(MutationsTypes.Initialize);
    },
};

export default actions;