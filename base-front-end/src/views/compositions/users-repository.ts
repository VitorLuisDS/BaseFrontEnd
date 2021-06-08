import { User } from "@/models/User";
import { Store } from "vuex";

export const usersRepository = (store: Store<any>) => {
    const initializeUsers = async (): Promise<void> => {
        await store.dispatch("userModule/initializeUsers");
    };

    const createUser = async (user: User): Promise<void> => {
        await store.dispatch("userModule/addUser", user);
    };

    const getUsers = (): User[] => {
        return store.getters["userModule/getUsers"];
    };

    return {
        initializeUsers,
        createUser,
        getUsers
    };
};