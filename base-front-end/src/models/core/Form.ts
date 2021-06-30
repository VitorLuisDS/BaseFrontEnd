export interface Form {
    validate: (callback: (isValid: boolean) => Promise<void>) => Promise<boolean>;
};