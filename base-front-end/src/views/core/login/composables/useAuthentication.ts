import { FormValidation } from "@/helpers/FormValidation";
import { Form } from "@/models/core/Form";
import { StatusCode } from "@/models/core/StatusCode";
import { User } from "@/models/security/User";
import { authenticationRepository } from "@/repositories/security/authentication.repository";
import { authenticationService } from "@/services/security/authentication.service";
import { ref } from "vue";

export default function useAuth() {
    const user = ref<User>(new User());
    const loading = ref<boolean>(false);
    const invalidUser = ref<boolean>(false);
    const errorMessage = ref<string>();
    const formLogin = ref<Form>();

    const tryAuthenticate = async (): Promise<boolean> => {
        let result = false;

        const response = await authenticationService.authenticateAync(user.value);
        if (response.statusCode == StatusCode.OK) {
            result = true;
            await authenticationRepository().setTokenAsync(response.content);
        }
        else {
            errorMessage.value = response.message ?? "Ops, something unexpected happened. Please contact us.";
        }

        return result;
    }

    const loginAsync = async () => {
        invalidUser.value = false;
        if (!(await FormValidation.isFormValid(formLogin.value)))
            return;

        loading.value = true;

        const result = await tryAuthenticate().finally(() => {
            loading.value = false;
        });

        if (!result) {
            invalidUser.value = true;
        }
    }

    return {
        loginAsync,
        user,
        loading,
        invalidUser,
        formLogin,
        errorMessage
    };
}