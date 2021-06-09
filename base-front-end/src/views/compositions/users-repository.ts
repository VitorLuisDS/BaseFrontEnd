import { User } from "@/models/User";
import { ActionsTypes } from "@/store/abstractions/ActionsTypes";
import { GettersTypes } from "@/store/abstractions/GettersTypes";
import { ModulesNames } from "@/store/abstractions/ModulesNames";
import { STORE } from '@/store/index'
import { UserState } from "@/store/states/UserState";
import { Store } from "vuex";

export const usersRepository = () => {
    const USERS_STORE = STORE as Store<UserState>;
    const MODULE_NAME = ModulesNames.UserModule;

    const initializeUsers = async (): Promise<void> => {
        await USERS_STORE.dispatch(`${MODULE_NAME}/${ActionsTypes.InitializeAsync}`);
    };

    const createUser = async (user: User): Promise<void> => {
        await USERS_STORE.dispatch(`${MODULE_NAME}/${ActionsTypes.AddAsync}`, user);
    };

    const getUsers = (): User[] => {
        return USERS_STORE.getters[`${MODULE_NAME}/${GettersTypes.GetAll}`];
    };

    return {
        initializeUsers,
        createUser,
        getUsers
    };
};