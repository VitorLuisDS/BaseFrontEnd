import { User } from "@/models/User"
import { ref, onMounted } from "vue"

export const usersRepository = (initializeOnMounted?: boolean) => {
    const users = ref<User[]>([]);

    const initializeUsers = () => {
        users.value = [
            new User(Math.floor(Math.random() * 100), 'Admin'),
            new User(Math.floor(Math.random() * 100), 'CEO'),
            new User(Math.floor(Math.random() * 100), 'Developer')
        ];
    }
    if (initializeOnMounted)
        onMounted(initializeUsers);

    const createUser = (user: User) => {
        users.value.push(user);
    }

    return { initializeUsers, createUser, users };
}