import { User } from "@/models/User";
import { Getter } from "@/store/abstractions/Getters";
import { GettersTypes } from "@/store/abstractions/GettersTypes";
import { State } from "@/store/abstractions/State";
import { UserState } from "@/store/states/UserState";
import { GetterTree } from "vuex";

const getters: GetterTree<UserState, State> & Getter<UserState> = {
    [GettersTypes.GetAll](state: UserState): User[] {
        return state.users ?? [];
    }
};

export default getters;