import { Rule } from "../models/async-validator/Rule";

export class RuleFactory {
    static required(message?: string): Rule {
        return { required: true, message: message ?? "Please input some value" };
    }
    static range(min: number, max: number, required?: boolean, message?: string): Rule {
        return { min: min, max: max, required: required, message: message ?? `Length should be ${min} to ${max}` };
    }
    static regexp(regexp: RegExp, required?: boolean, message?: string): Rule {
        return { pattern: regexp, required: required, message: message ?? `Please input some valid value` };
    }
};