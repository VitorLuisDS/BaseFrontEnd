import { User } from "@/models/User";
import { Mutation } from "@/store/abstractions/core/Mutation";
import { MutationType } from "@/store/abstractions/core/types/MutationType";
import { UserState } from "@/store/modules/user/UserState";
import { MutationTree } from "vuex";

const mutations: MutationTree<UserState> & Mutation<UserState> = {
    [MutationType.Add](state: UserState, payload: User) {
        state.users.push(payload);
    },
    [MutationType.Initialize](state: UserState) {
        state.users = [
            new User(Math.floor(Math.random() * 100), 'Admin'),
            new User(Math.floor(Math.random() * 100), 'CEO'),
            new User(Math.floor(Math.random() * 100), 'Developer')
        ];
    }
};

export default mutations;