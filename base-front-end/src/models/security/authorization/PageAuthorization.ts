import { FunctionalityCode } from "@/constants/FunctionalityCode";
import { ModuleCode } from "@/constants/ModuleCode";
import { SecurityPageCode } from "@/constants/pages-codes/security/SecurityPageCode";
import { Page } from "./Page";

export class PageAuthorization implements Page {
    moduleCode: ModuleCode;
    pageCode: SecurityPageCode;
    allowedFunctionalities: FunctionalityCode[];

    constructor(moduleCode: ModuleCode, pageCode: SecurityPageCode, allowedFunctionalities: FunctionalityCode[]) {
        this.moduleCode = moduleCode;
        this.pageCode = pageCode;
        this.allowedFunctionalities = allowedFunctionalities;
    }
};