export class User {
    login: string;
    password: string;
    stayConnected: boolean;

    constructor() {
        this.login = "";
        this.password = "";
        this.stayConnected = false;
    }
};