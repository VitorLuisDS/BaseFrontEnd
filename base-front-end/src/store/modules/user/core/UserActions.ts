import { User } from "@/models/User";
import { Action } from "@/store/abstractions/core/Action";
import { ActionsTypes } from "@/store/abstractions/core/types/ActionsTypes";
import { State } from "@/store/abstractions/State";
import { UserState } from "@/store/modules/user/UserState";
import { ActionTree } from "vuex";
import { MutationsTypes } from "@/store/abstractions/core/types/MutationsTypes";

const actions: ActionTree<UserState, State> & Action<User> = {
    async [ActionsTypes.AddAsync]({ commit }, payload: User) {
        commit(MutationsTypes.Add, payload);
    },
    async [ActionsTypes.InitializeAsync]({ commit }) {
        commit(MutationsTypes.Initialize);
    },
};

export default actions;