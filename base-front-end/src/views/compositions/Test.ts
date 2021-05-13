import { User } from "@/views/models/User"
export const commonMethods = {
    someMethod() {
        const usera = new User(1, 'olá');
        console.log(usera);
    }
}