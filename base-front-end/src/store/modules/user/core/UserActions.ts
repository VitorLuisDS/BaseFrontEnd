import { User } from "@/models/User";
import { ActionType } from "@/store/abstractions/core/types/ActionType";
import { State } from "@/store/abstractions/State";
import { UserState } from "@/store/modules/user/UserState";
import { ActionTree } from "vuex";
import { MutationType } from "@/store/abstractions/core/types/MutationType";

const actions: ActionTree<UserState, State> = {
    async [ActionType.AddAsync]({ commit }, payload: User) {
        commit(MutationType.Add, payload);
    },
    async [ActionType.InitializeAsync]({ commit }) {
        commit(MutationType.Initialize);
    },
};

export default actions;