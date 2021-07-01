export class PageAuthorizationRequest {
    moduleCode: string;
    pageCode: string;

    constructor(moduleCode: string, pageCode: string) {
        this.moduleCode = moduleCode;
        this.pageCode = pageCode;
    }
};