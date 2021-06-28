import { User } from "@/models/User";
import { ActionType } from "@/store/abstractions/core/types/ActionType";
import { ModuleName } from "@/store/abstractions/ModuleName";
import { STORE } from '@/store/index'
import { UserState } from "@/store/modules/user/UserState";
import { Store } from "vuex";
import { GetterType } from "@/store/abstractions/core/types/GetterType";

export const usersRepository = () => {
    const USERS_STORE = STORE as Store<UserState>;
    const MODULE_NAME = ModuleName.UserModule;

    const initializeUsers = async (): Promise<void> => {
        await USERS_STORE.dispatch(`${MODULE_NAME}/${ActionType.InitializeAsync}`);
    };

    const createUser = async (user: User): Promise<void> => {
        await USERS_STORE.dispatch(`${MODULE_NAME}/${ActionType.AddAsync}`, user);
    };

    const getUsers = (): User[] => {
        return USERS_STORE.getters[`${MODULE_NAME}/${GetterType.GetAll}`];
    };

    return {
        initializeUsers,
        createUser,
        getUsers
    };
};