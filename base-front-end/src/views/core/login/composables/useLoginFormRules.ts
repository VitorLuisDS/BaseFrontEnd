import { RuleFactory } from "@/helpers/RuleFactory";
import { reactive } from "vue";

export default function useLoginFormRules() {

    const rules = reactive({
        login: [
            RuleFactory.required('Please input an username'),
            RuleFactory.range(3, 30, true)
        ],
        password: [
            RuleFactory.required('Please input an password'),
            RuleFactory.range(3, 30, true)
        ]
    });

    return { rules };

}