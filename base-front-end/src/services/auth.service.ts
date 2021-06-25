import baseService from "./abstraction/base.service";
import { User } from "@/models/User";
import { AuthRepository } from "@/repositories/security/AuthRepository";

const axiosInstance = baseService.axiosInstance;

export default {
    async authenticateAync(user: User) {
        await AuthRepository().clearTokenAsync();
        return await axiosInstance.post("https://localhost:44382/api/auth", user);
    },

    async authenticateByRefreshTokenAync() {
        return await axiosInstance.post("https://localhost:44382/api/auth/Token");
    },
};