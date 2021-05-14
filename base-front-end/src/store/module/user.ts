import { User } from "@/models/User";
import { Module } from "vuex";

interface UserState {
    users: User[]
}

const usersModule: Module<UserState, UserState> = {
    state: {
        users: []
    },

    getters: {
        getUsers(state: UserState): User[] {
            return state.users ?? [];
        }
    },

    mutations: {
        addUser(state: UserState, payload: User) {
            state.users.push(payload);
        },
        initializeUsers(state: UserState) {
            state.users = [
                new User(Math.floor(Math.random() * 100), 'Admin'),
                new User(Math.floor(Math.random() * 100), 'CEO'),
                new User(Math.floor(Math.random() * 100), 'Developer')
            ];
        }
    },

    actions: {
        async addUser({ commit }, payload: User): Promise<void> {
            commit("addUser", payload);
        },

        async initializeUsers({ commit }): Promise<void> {
            commit("initializeUsers");
        }
    },
    namespaced: true
};

export default usersModule;