import { UserTest } from "@/models/UserTest";
import { State } from "@/store/abstractions/State";
import { GetterType } from "@/store/abstractions/core/types/GetterType";
import { UserState } from "@/store/modules/user/UserState";
import { GetterTree } from "vuex";

const getters: GetterTree<UserState, State> = {
    [GetterType.GetAll](state: UserState): UserTest[] {
        return state.users ?? [];
    }
};

export default getters;