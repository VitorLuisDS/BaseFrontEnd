import { StatusCode } from "./StatusCode";

export class ResponseBase<T>{
    statusCode: StatusCode;
    message: string;
    content: T;

    constructor(statusCode: StatusCode, message: string, content: T) {
        this.statusCode = statusCode;
        this.message = message;
        this.content = content;
    }
};