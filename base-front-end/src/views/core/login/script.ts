import { defineComponent } from "vue";
import useFormLoginRules from "./composables/useLoginFormRules";
import useAuth from "./composables/useAuth";

export default defineComponent({
    setup() {
        return {
            ...useFormLoginRules(),
            ...useAuth()
        };
    },
})