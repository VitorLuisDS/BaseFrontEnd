import { User } from "@/models/User"
import { ref } from "vue"
// export const usersRepository = {
//     getUsers(): User[] {
//         const users: User[] = [
//             new User(1, 'Admin'),
//             new User(2, 'CEO'),
//             new User(3, 'Developer')
//         ]

//         return users;
//     }
// }
export const usersRepository = () => {
    const users = ref<User[]>([
        new User(Math.floor(Math.random() * 100), 'Admin'),
        new User(Math.floor(Math.random() * 100), 'CEO'),
        new User(Math.floor(Math.random() * 100), 'Developer')
    ]);

    const createUser = (user: User) => {
        users.value.push(user);
    }

    return { createUser, users };
}