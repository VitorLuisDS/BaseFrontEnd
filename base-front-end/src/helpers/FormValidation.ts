import { Form } from "@/models/core/Form";

export class FormValidation {
    static async isFormValid(form: Form | undefined): Promise<boolean> {
        let valid = false;
        await form?.validate(async (isValid) => {
            valid = isValid;
        });
        return valid;
    }
};