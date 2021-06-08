import { Page } from "@/models/Page";
import { STORE } from '@/store/index'

export const pagesRepository = () => {
    const initializePages = async (): Promise<void> => {
        await STORE.dispatch("pageModule/initializePages");
    };

    const createPage = async (page: Page): Promise<void> => {
        await STORE.dispatch("pageModule/addPage", page);
    };

    const getPages = (): Page[] => {
        return STORE.getters["pageModule/getPages"];
    };

    return {
        initializePages,
        createPage,
        getPages
    };
};