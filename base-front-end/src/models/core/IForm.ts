export interface IForm {
    validate: (callback: (isValid: boolean) => Promise<void>) => Promise<boolean>;
};