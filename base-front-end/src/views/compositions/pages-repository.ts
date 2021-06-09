import { Page } from "@/models/Page";
import { STORE } from '@/store/index'
import { PageActionsTypes } from "@/store/modules/page/PageActionsTypes";
import { PageGettersTypes } from "@/store/modules/page/PageGettersTypes";
import { PageState } from "@/store/states/PageState";
import { Store } from "vuex";

export const pagesRepository = () => {
    const PAGE_STORE = STORE as Store<PageState>;

    const initializePages = async (): Promise<void> => {
        await PAGE_STORE.dispatch(`pageModule/${PageActionsTypes.InitializeAsync}`);
    };

    const createPage = async (page: Page): Promise<void> => {
        await PAGE_STORE.dispatch(`pageModule/${PageActionsTypes.AddAsync}`, page);
    };

    const getPages = (): Page[] => {
        return PAGE_STORE.getters[`pageModule/${PageGettersTypes.GetAll}`];
    };

    return {
        initializePages,
        createPage,
        getPages
    };
};