import { PageTest } from "@/models/PageTest";
import { ActionType } from "@/store/abstractions/core/types/ActionType";
import { State } from "@/store/abstractions/State";
import { PageState } from "@/store/modules/page/PageState";
import { ActionTree } from "vuex";
import { MutationType } from "@/store/abstractions/core/types/MutationType";

const actions: ActionTree<PageState, State> = {
    async [ActionType.AddAsync]({ commit }, payload: PageTest) {
        commit(MutationType.Add, payload);
    },
    async [ActionType.InitializeAsync]({ commit }) {
        commit(MutationType.Initialize);
    },
};

export default actions;