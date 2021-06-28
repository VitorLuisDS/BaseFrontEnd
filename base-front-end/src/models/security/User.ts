export class User {
    login: string;
    password: string;
    stayConnected: boolean;

    constructor(login?: string, password?: string, stayConnected?: boolean) {
        this.login = login ?? "";
        this.password = password ?? "";
        this.stayConnected = stayConnected ?? false;
    }
};