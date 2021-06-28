import { Page } from "@/models/Page";
import { ActionType } from "@/store/abstractions/core/types/ActionType";
import { ModuleName } from "@/store/abstractions/ModuleName";
import { STORE } from '@/store/index'
import { PageState } from "@/store/modules/page/PageState";
import { Store } from "vuex";
import { GetterType } from "@/store/abstractions/core/types/GetterType";

export const pagesRepository = () => {
    const PAGE_STORE = STORE as Store<PageState>;
    const MODULE_NAME = ModuleName.PageModule;

    const initializePages = async (): Promise<void> => {
        await PAGE_STORE.dispatch(`${MODULE_NAME}/${ActionType.InitializeAsync}`);
    };

    const createPage = async (page: Page): Promise<void> => {
        await PAGE_STORE.dispatch(`${MODULE_NAME}/${ActionType.AddAsync}`, page);
    };

    const getPages = (): Page[] => {
        return PAGE_STORE.getters[`${MODULE_NAME}/${GetterType.GetAll}`];
    };

    return {
        initializePages,
        createPage,
        getPages
    };
};