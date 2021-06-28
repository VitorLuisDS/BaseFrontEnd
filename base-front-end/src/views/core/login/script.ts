import { computed, defineComponent, ref } from "vue";
import { authRepository } from "@/repositories/security/auth.repository";
import { authService } from "@/services/security/auth.service";
import { User } from "@/models/security/User";

export default defineComponent({
    setup() {
        const username = ref<string>("");
        const password = ref<string>("");
        const stayConnected = ref<boolean>(false);
        const loading = ref<boolean>(false);

        return {
            ...authRepository(),
            username,
            password,
            stayConnected,
            loading,
            token: computed((): string => authRepository().getAccessToken())
        };
    },
    methods: {
        async loginAsync() {
            this.loading = true;
            let result = false;

            const response = await authService.authenticateAync(new User(this.username, this.password, this.stayConnected));
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

            const response = await authService.renewAccessToken();
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