import { User } from "@/models/User";
import { Action } from "@/store/abstractions/Action";
import { ActionsTypes } from "@/store/abstractions/ActionsTypes";
import { MutationsTypes } from "@/store/abstractions/MutationsTypes";
import { State } from "@/store/abstractions/State";
import { UserState } from "@/store/states/UserState";
import { ActionTree } from "vuex";

const actions: ActionTree<UserState, State> & Action<User> = {
    async [ActionsTypes.AddAsync]({ commit }, payload: User) {
        commit(MutationsTypes.Add, payload);
    },
    async [ActionsTypes.InitializeAsync]({ commit }) {
        commit(MutationsTypes.Initialize);
    },
};

export default actions;