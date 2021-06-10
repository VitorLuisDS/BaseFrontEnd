import { User } from "@/models/User";
import { Getter } from "@/store/abstractions/Getters";
import { State } from "@/store/abstractions/State";
import { GettersTypes } from "@/store/abstractions/core/types/GettersTypes";
import { UserState } from "@/store/modules/user/UserState";
import { GetterTree } from "vuex";

const getters: GetterTree<UserState, State> & Getter<UserState> = {
    [GettersTypes.GetAll](state: UserState): User[] {
        return state.users ?? [];
    }
};

export default getters;