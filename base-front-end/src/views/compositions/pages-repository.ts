import { Page } from "@/models/Page";
import { Store } from "vuex";

export const pagesRepository = (store: Store<any>) => {
    const initializePages = async (): Promise<void> => {
        await store.dispatch("pageModule/initializePages");
    };

    const createPage = async (page: Page): Promise<void> => {
        await store.dispatch("pageModule/addPage", page);
    };

    const getPages = (): Page[] => {
        return store.getters["pageModule/getPages"];
    };

    return {
        initializePages,
        createPage,
        getPages
    };
};