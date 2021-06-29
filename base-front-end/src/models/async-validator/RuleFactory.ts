import { Rule } from "./Rule";

export class RuleFactory {
    static required(message?: string): Rule {
        return { required: true, message: message ?? "Please input some value" };
    }
    static range(min: number, max: number, required?: boolean, message?: string): Rule {
        return { min: min, max: max, required: required, message: message ?? `Length should be ${min} to ${max}` };
    }
};