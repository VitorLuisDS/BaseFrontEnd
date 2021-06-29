import { FormValidation } from "@/helpers/FormValidation";
import { IForm } from "@/models/core/IForm";
import { User } from "@/models/security/User";
import { authRepository } from "@/repositories/security/auth.repository";
import { authService } from "@/services/security/auth.service";
import { ref } from "vue";

export default function useAuth() {
    const user = ref<User>(new User());
    const loading = ref<boolean>(false);
    const invalidUser = ref<boolean>(false);
    const formLogin = ref<IForm>();

    const tryAuthenticate = async (user: User): Promise<boolean> => {
        let result = false;

        const response = await authService.authenticateAync(user);
        if (response.status == 200) {
            result = true;
            await authRepository().setTokenAsync(response.data.content.access_token);
        }

        return result;
    }

    const loginAsync = async () => {
        invalidUser.value = false;
        if (!(await FormValidation.isFormValid(formLogin.value)))
            return;

        loading.value = true;

        const result = await tryAuthenticate(new User(user.value.login, user.value.password, user.value.stayConnected)).finally(() => {
            loading.value = false;
        });

        if (!result)
            invalidUser.value = true;
    }

    return {
        loginAsync,
        user,
        loading,
        invalidUser,
        formLogin
    };
}