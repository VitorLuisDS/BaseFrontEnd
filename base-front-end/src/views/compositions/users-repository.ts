import { User } from "@/models/User";
import { STORE } from '@/store/index'
import { UserActionsTypes } from "@/store/modules/user/UserActionsTypes";
import { UserGettersTypes } from "@/store/modules/user/UserGettersTypes";
import { UserState } from "@/store/states/UserState";
import { Store } from "vuex";

export const usersRepository = () => {
    const USERS_STORE = STORE as Store<UserState>;

    const initializeUsers = async (): Promise<void> => {
        await USERS_STORE.dispatch(`userModule/${UserActionsTypes.InitializeAsync}`);
    };

    const createUser = async (user: User): Promise<void> => {
        await USERS_STORE.dispatch(`userModule/${UserActionsTypes.AddAsync}`, user);
    };

    const getUsers = (): User[] => {
        return USERS_STORE.getters[`userModule/${UserGettersTypes.GetAll}`];
    };

    return {
        initializeUsers,
        createUser,
        getUsers
    };
};