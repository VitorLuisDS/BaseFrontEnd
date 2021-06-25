export class User {
    id: number;
    name: string;
    login: string;
    password: string;

    constructor(id?: number, name?: string, login?: string, password?: string) {
        this.id = id ?? 0;
        this.name = name ?? "";

        this.login = login ?? "";
        this.password = password ?? "";
    }
}