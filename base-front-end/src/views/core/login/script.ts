import { computed, defineComponent, reactive, ref } from "vue";
import { authRepository } from "@/repositories/security/auth.repository";
import { authService } from "@/services/security/auth.service";
import { User } from "@/models/security/User";

export default defineComponent({
    setup() {
        const user = ref<User>(new User());
        const loading = ref<boolean>(false);
        const rules = reactive({
            login: [
                { required: true, message: 'Please input an username', trigger: 'change' },
                { min: 3, max: 30, message: 'Length should be 3 to 10', trigger: 'change' }
            ],
            password: [
                { required: true, message: 'Please input an password', trigger: 'change' },
                { min: 3, max: 30, message: 'Length should be 3 to 30', trigger: 'change' }
            ]
        });

        const isValid = async (form: unknown) => {
            let valid = false;
            await (form as { validate: (callback: (isValid: boolean) => Promise<void>) => Promise<boolean> }).validate(async (isValid) => {
                valid = isValid;
            });
            return valid;
        };

        return {
            ...authRepository(),
            rules,
            user,
            loading,
            token: computed((): string => authRepository().getAccessToken()),
            isValid
        };
    },
    methods: {
        async loginAsync() {
            if (!(await this.isValid(this.$refs.formLogin)))
                return;

            this.loading = true;
            let result = false;

            const response = await authService.authenticateAync(new User(this.user.login, this.user.password, this.user.stayConnected));
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