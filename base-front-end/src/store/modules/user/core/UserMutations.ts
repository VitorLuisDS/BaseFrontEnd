import { UserTest } from "@/models/UserTest";
import { MutationType } from "@/store/abstractions/core/types/MutationType";
import { UserState } from "@/store/modules/user/UserState";
import { MutationTree } from "vuex";

const mutations: MutationTree<UserState> = {
    [MutationType.Add](state: UserState, payload: UserTest) {
        state.users.push(payload);
    },
    [MutationType.Initialize](state: UserState) {
        state.users = [
            new UserTest(Math.floor(Math.random() * 100), 'Admin'),
            new UserTest(Math.floor(Math.random() * 100), 'CEO'),
            new UserTest(Math.floor(Math.random() * 100), 'Developer')
        ];
    }
};

export default mutations;