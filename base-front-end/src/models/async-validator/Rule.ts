export class Rule {
    type?: string;
    required?: boolean;
    pattern?: RegExp;
    min?: number;
    max?: number;
    length?: number;
    len?: number;
    enum?: string[] | number[];
    whitespace?: boolean;
    fields?: { rules: Rule };
    defaultField?: { rules: Rule };
    transform?: () => any;
    message?: string;
    trigger?: string;

    constructor(rule?: Rule) {
        this.type = rule?.type;
        this.required = rule?.required;
        this.pattern = rule?.pattern;
        this.min = rule?.min;
        this.max = rule?.max;
        this.length = rule?.length;
        this.len = rule?.len;
        this.enum = rule?.enum;
        this.whitespace = rule?.whitespace;
        this.fields = rule?.fields;
        this.defaultField = rule?.defaultField;
        this.transform = rule?.transform;
        this.message = rule?.message;
        this.trigger = rule?.trigger ?? "change";
    }
};