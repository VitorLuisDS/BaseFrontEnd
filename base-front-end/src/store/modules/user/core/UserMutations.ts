import { User } from "@/models/User";
import { Mutation } from "@/store/abstractions/Mutation";
import { MutationsTypes } from "@/store/abstractions/core/types/MutationsTypes";
import { UserState } from "@/store/modules/user/UserState";
import { MutationTree } from "vuex";

const mutations: MutationTree<UserState> & Mutation<UserState> = {
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
};

export default mutations;