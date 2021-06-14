import { Page } from "@/models/Page";
import { State } from "@/store/abstractions/State";
import { GetterType } from "@/store/abstractions/core/types/GetterType";
import { PageState } from "@/store/modules/page/PageState";
import { GetterTree } from "vuex";

const getters: GetterTree<PageState, State> = {
    [GetterType.GetAll](state: PageState): Page[] {
        return state.pages ?? [];
    }
};

export default getters;