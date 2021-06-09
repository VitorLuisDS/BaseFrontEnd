import { Page } from "@/models/Page";
import { ActionsTypes } from "@/store/abstractions/ActionsTypes";
import { GettersTypes } from "@/store/abstractions/GettersTypes";
import { ModulesNames } from "@/store/abstractions/ModulesNames";
import { STORE } from '@/store/index'
import { PageState } from "@/store/states/PageState";
import { Store } from "vuex";

export const pagesRepository = () => {
    const PAGE_STORE = STORE as Store<PageState>;
    const MODULE_NAME = ModulesNames.PageModule;

    const initializePages = async (): Promise<void> => {
        await PAGE_STORE.dispatch(`${MODULE_NAME}/${ActionsTypes.InitializeAsync}`);
    };

    const createPage = async (page: Page): Promise<void> => {
        await PAGE_STORE.dispatch(`${MODULE_NAME}/${ActionsTypes.AddAsync}`, page);
    };

    const getPages = (): Page[] => {
        return PAGE_STORE.getters[`${MODULE_NAME}/${GettersTypes.GetAll}`];
    };

    return {
        initializePages,
        createPage,
        getPages
    };
};