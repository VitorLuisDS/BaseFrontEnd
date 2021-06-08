import { User } from "@/models/User";
import { STORE } from '@/store/index'

export const usersRepository = () => {
    const initializeUsers = async (): Promise<void> => {
        await STORE.dispatch("userModule/initializeUsers");
    };

    const createUser = async (user: User): Promise<void> => {
        await STORE.dispatch("userModule/addUser", user);
    };

    const getUsers = (): User[] => {
        return STORE.getters["userModule/getUsers"];
    };

    return {
        initializeUsers,
        createUser,
        getUsers
    };
};