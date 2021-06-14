import { AuthTokens } from "@/models/security/AuthTokens";
import { State } from "@/store/abstractions/State";

export interface AuthState extends State {
    authTokens: AuthTokens
};