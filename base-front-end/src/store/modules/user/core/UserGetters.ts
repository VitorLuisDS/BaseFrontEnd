import { User } from "@/models/User";
import { Getter } from "@/store/abstractions/core/Getter";
import { State } from "@/store/abstractions/State";
import { GetterType } from "@/store/abstractions/core/types/GetterType";
import { UserState } from "@/store/modules/user/UserState";
import { GetterTree } from "vuex";

const getters: GetterTree<UserState, State> & Getter<UserState> = {
    [GetterType.GetAll](state: UserState): User[] {
        return state.users ?? [];
    }
};

export default getters;