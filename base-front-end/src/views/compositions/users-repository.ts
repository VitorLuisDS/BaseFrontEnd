import { User } from "@/models/User";
import { ModulesNames } from "@/store/abstractions/ModulesNames";
import { STORE } from '@/store/index'
import { UserActionsTypes } from "@/store/modules/user/UserActionsTypes";
import { UserGettersTypes } from "@/store/modules/user/UserGettersTypes";
import { UserState } from "@/store/states/UserState";
import { Store } from "vuex";

export const usersRepository = () => {
    const USERS_STORE = STORE as Store<UserState>;
    const MODULE_NAME = ModulesNames.UserModule;

    const initializeUsers = async (): Promise<void> => {
        await USERS_STORE.dispatch(`${MODULE_NAME}/${UserActionsTypes.InitializeAsync}`);
    };

    const createUser = async (user: User): Promise<void> => {
        await USERS_STORE.dispatch(`${MODULE_NAME}/${UserActionsTypes.AddAsync}`, user);
    };

    const getUsers = (): User[] => {
        return USERS_STORE.getters[`${MODULE_NAME}/${UserGettersTypes.GetAll}`];
    };

    return {
        initializeUsers,
        createUser,
        getUsers
    };
};