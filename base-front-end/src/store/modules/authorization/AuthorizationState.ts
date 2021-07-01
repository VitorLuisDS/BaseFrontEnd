import { PageAuthorization } from "@/models/security/authorization/PageAuthorization";
import { State } from "@/store/abstractions/State";

export interface AuthorizationState extends State {
    currentPageAuthorization: PageAuthorization | null;
};