import { Page } from "@/models/Page";
import { Getter } from "@/store/abstractions/core/Getter";
import { State } from "@/store/abstractions/State";
import { GetterType } from "@/store/abstractions/core/types/GetterType";
import { PageState } from "@/store/modules/page/PageState";
import { GetterTree } from "vuex";

const getters: GetterTree<PageState, State> & Getter<PageState> = {
    [GetterType.GetAll](state: PageState): Page[] {
        return state.pages ?? [];
    }
};

export default getters;