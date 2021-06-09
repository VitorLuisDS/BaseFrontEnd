import { Page } from "@/models/Page";
import { ModulesNames } from "@/store/abstractions/ModulesNames";
import { STORE } from '@/store/index'
import { PageActionsTypes } from "@/store/modules/page/PageActionsTypes";
import { PageGettersTypes } from "@/store/modules/page/PageGettersTypes";
import { PageState } from "@/store/states/PageState";
import { Store } from "vuex";

export const pagesRepository = () => {
    const PAGE_STORE = STORE as Store<PageState>;
    const MODULE_NAME = ModulesNames.PageModule;

    const initializePages = async (): Promise<void> => {
        await PAGE_STORE.dispatch(`${MODULE_NAME}/${PageActionsTypes.InitializeAsync}`);
    };

    const createPage = async (page: Page): Promise<void> => {
        await PAGE_STORE.dispatch(`${MODULE_NAME}/${PageActionsTypes.AddAsync}`, page);
    };

    const getPages = (): Page[] => {
        return PAGE_STORE.getters[`${MODULE_NAME}/${PageGettersTypes.GetAll}`];
    };

    return {
        initializePages,
        createPage,
        getPages
    };
};