import { ModuleCode } from "@/constants/ModuleCode";
import { SecurityPageCode } from "@/constants/pages-codes/security/SecurityPageCode";
import { Page } from "./Page";

export class PageAuthorizationRequest implements Page {
    moduleCode: ModuleCode;
    pageCode: SecurityPageCode;

    constructor(moduleCode: ModuleCode, pageCode: SecurityPageCode) {
        this.moduleCode = moduleCode;
        this.pageCode = pageCode;
    }
};