import { FunctionalityCode } from "@/constants/FunctionalityCode";
import { ModuleCode } from "@/constants/ModuleCode";
import { PageCode } from "@/constants/pages-codes/security/PageCode";

export class PageAuthorization {
    moduleCode: ModuleCode;
    pageCode: PageCode;
    allowedFunctionalities: FunctionalityCode[];

    constructor(moduleCode: ModuleCode, pageCode: PageCode, allowedFunctionalities: FunctionalityCode[]) {
        this.moduleCode = moduleCode;
        this.pageCode = pageCode;
        this.allowedFunctionalities = allowedFunctionalities;
    }
};