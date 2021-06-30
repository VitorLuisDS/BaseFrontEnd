import { defineComponent } from "vue";
import useFormLoginRules from "./composables/useLoginFormRules";
import useAuth from "./composables/useAuthentication";

export default defineComponent({
    name: "Login",
    setup() {
        return {
            ...useFormLoginRules(),
            ...useAuth()
        };
    },
})