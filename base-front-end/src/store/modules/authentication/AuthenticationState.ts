import { State } from "@/store/abstractions/State";

export interface AuthenticationState extends State {
    accessToken: string | null
};