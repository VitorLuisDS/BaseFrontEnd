import { ModuleCode } from "@/constants/ModuleCode";
import { PageCode } from "@/constants/pages-codes/security/PageCode";

export class PageAuthorizationRequest {
    moduleCode: ModuleCode;
    pageCode: PageCode;

    constructor(moduleCode: ModuleCode, pageCode: PageCode) {
        this.moduleCode = moduleCode;
        this.pageCode = pageCode;
    }
};