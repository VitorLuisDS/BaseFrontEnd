import { ErrorMessageConstants } from "@/constants/ErrorMessageConstants";
import { FormValidation } from "@/helpers/FormValidation";
import { Form } from "@/models/core/Form";
import { StatusCode } from "@/constants/StatusCode";
import { User } from "@/models/security/User";
import { authenticationRepository } from "@/repositories/security/authentication.repository";
import { authenticationService } from "@/services/security/authentication.service";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default function useAuth() {
    const user = ref<User>(new User());
    const loading = ref<boolean>(false);
    const invalidUser = ref<boolean>(false);
    const errorMessage = ref<string>();
    const formLogin = ref<Form>();
    const router = useRouter();
    const route = useRoute();

    const tryAuthenticate = async (): Promise<boolean> => {
        let result = false;

        const response = await authenticationService.authenticateAync(user.value);
        switch (response.statusCode) {
            case StatusCode.OK: {
                result = true;
                await authenticationRepository().setAccessTokenAsync(response.content.accessToken);
                break;
            }
            case (StatusCode.InternalServerError): {
                errorMessage.value = ErrorMessageConstants.SOMETHING_UNEXPECTED_HAPPENED;
                break;
            }
            default: {
                errorMessage.value = response.message;
                break;
            }
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

        if (result) {

            if (route.query.redirect) {
                try {
                    router.push({ name: route.query.redirect as string });
                }
                catch {
                    router.push({ name: "Home" });
                }
            }
            else
                router.push({ name: "Home" });
        }
        else
            invalidUser.value = true;
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