import { User } from "@/models/User";
import { Module } from "vuex";
import { State } from "@/store/abstractions/State"
import { UserState } from "../../states/UserState";
import { MutationsTypes } from "../../abstractions/MutationsTypes";
import { GettersTypes } from "@/store/abstractions/GettersTypes";
import { ActionsTypes } from "@/store/abstractions/ActionsTypes";

const userModule: Module<UserState, State> = {
    state: {
        users: []
    },

    getters: {
        [GettersTypes.GetAll](state: UserState): User[] {
            return state.users ?? [];
        }
    },

    mutations: {
        [MutationsTypes.Add](state: UserState, payload: User) {
            state.users.push(payload);
        },
        [MutationsTypes.Initialize](state: UserState) {
            state.users = [
                new User(Math.floor(Math.random() * 100), 'Admin'),
                new User(Math.floor(Math.random() * 100), 'CEO'),
                new User(Math.floor(Math.random() * 100), 'Developer')
            ];
        }
    },

    actions: {
        async [ActionsTypes.AddAsync]({ commit }, payload: User): Promise<void> {
            commit(MutationsTypes.Add, payload);
        },

        async [ActionsTypes.InitializeAsync]({ commit }): Promise<void> {
            commit(MutationsTypes.Initialize);
        }
    },
    namespaced: true
};

export default userModule;