import { computed, defineComponent, ref } from "vue";
import { AuthRepository } from "@/repositories/security/AuthRepository";
import authService from "@/services/auth.service";
import { User } from "@/models/User";

export default defineComponent({
    setup() {
        const username = ref<string>();
        const password = ref<string>();
        const loading = ref<boolean>(false);

        return {
            ...AuthRepository(),
            username,
            password,
            loading,
            token: computed((): string => AuthRepository().getAccessToken())
        };
    },
    methods: {
        async login() {
            this.loading = true;
            let result = false;

            const response = await authService.authenticateAync(new User(undefined, undefined, this.username, this.password));
            if (response.status == 200) {
                result = true;
                await this.setTokenAsync(response.data.content.access_token);
            }

            this.loading = false;

            if (!result)
                this.$router.push({ name: "NotAuthorized", params: { message: "User profile not authorized" } });
        },
        async renewAccessToken() {
            this.loading = true;
            let result = false;

            const response = await authService.authenticateByRefreshTokenAync();
            if (response.status == 200) {
                result = true;
                await this.setTokenAsync(response.data.content.access_token);
            }

            this.loading = false;

            if (!result)
                this.$router.push({ name: "NotAuthorized", params: { message: "User profile not authorized" } });
        }
    }
})