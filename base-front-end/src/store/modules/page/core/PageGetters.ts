import { Page } from "@/models/Page";
import { Getter } from "@/store/abstractions/Getters";
import { State } from "@/store/abstractions/State";
import { GettersTypes } from "@/store/abstractions/core/types/GettersTypes";
import { PageState } from "@/store/modules/page/PageState";
import { GetterTree } from "vuex";

const getters: GetterTree<PageState, State> & Getter<PageState> = {
    [GettersTypes.GetAll](state: PageState): Page[] {
        return state.pages ?? [];
    }
};

export default getters;