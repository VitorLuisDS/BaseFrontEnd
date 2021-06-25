import { State } from "@/store/abstractions/State";

export interface AuthState extends State {
    accessToken: string | null
};