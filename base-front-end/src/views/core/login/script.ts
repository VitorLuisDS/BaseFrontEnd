import { defineComponent, ref } from "vue";

export default defineComponent({
    setup() {
        const username = ref<string>();
        const password = ref<string>();

        return { username, password };
    },
    methods: {
        login() {
            const result = false;

            if (!result)
                this.$router.push({ name: "NotAuthorized", params: { message: "User profile not authorized" } });
        }
    }
})