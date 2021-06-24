import { computed, defineComponent, ref } from "vue";
import { AuthTokens } from "@/models/security/AuthTokens";
import { AuthRepository } from "@/repositories/security/AuthRepository";
import baseService from "@/services/abstraction/base.service";

export default defineComponent({
    setup() {
        const username = ref<string>();
        const password = ref<string>();

        return {
            ...AuthRepository(),
            username,
            password,
            token: computed((): AuthTokens => AuthRepository().getAuthTokens())
        };
    },
    methods: {
        async login() {
            // console.log(this.token);
            // await this.setTokenAsync(new AuthTokens('ola', 'teste'));
            // console.log(this.token);
            let result = false;
            const response = await baseService.post('https://localhost:44382/api/authentication', { login: this.username, password: this.password });
            console.log(response);

            const response2 = await baseService.get('https://localhost:44382/WeatherForecast');
            console.log(response2);

            // const response3 = await baseService.post('https://localhost:44382/api/authentication/logout');
            // console.log(response3);

            // const response4 = await baseService.get('https://localhost:44382/WeatherForecast');
            // console.log(response4);

            result = true;
            if (!result)
                this.$router.push({ name: "NotAuthorized", params: { message: "User profile not authorized" } });
        }
    }
})