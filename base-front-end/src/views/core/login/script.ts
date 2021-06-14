import { computed, defineComponent, ref } from "vue";
import { AuthTokens } from "@/models/security/AuthTokens";
import { AuthRepository } from "@/repositories/security/AuthRepository";

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
            console.log(this.token);
            await this.setTokenAsync(new AuthTokens('ola', 'teste'));
            console.log(this.token);
            // const result = false;
            // const response = await service.post('https://localhost:44382/api/authentication', { login: this.username, password: this.password });

            // console.log(response);

            // if (!result)
            //     this.$router.push({ name: "NotAuthorized", params: { message: "User profile not authorized" } });
        }
    }
})