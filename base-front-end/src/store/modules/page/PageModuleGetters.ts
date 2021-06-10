import { Page } from "@/models/Page";
import { Getter } from "@/store/abstractions/Getters";
import { GettersTypes } from "@/store/abstractions/GettersTypes";
import { State } from "@/store/abstractions/State";
import { PageState } from "@/store/states/PageState";
import { GetterTree } from "vuex";

const getters: GetterTree<PageState, State> & Getter<PageState> = {
    [GettersTypes.GetAll](state: PageState): Page[] {
        return state.pages ?? [];
    }
};

export default getters;