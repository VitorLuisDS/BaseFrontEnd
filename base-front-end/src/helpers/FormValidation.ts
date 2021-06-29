import { IForm } from "@/models/core/IForm";

export class FormValidation {
    static async isFormValid(form: IForm | undefined): Promise<boolean> {
        let valid = false;
        await form?.validate(async (isValid) => {
            valid = isValid;
        });
        return valid;
    }
};