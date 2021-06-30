export class ResponseBase<T>{
    statusCode: number;
    message: string;
    content: T;

    constructor(statusCode: number, message: string, content: T) {
        this.statusCode = statusCode;
        this.message = message;
        this.content = content;
    }
};