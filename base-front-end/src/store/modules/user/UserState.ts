import { User } from "@/models/User";
import { State } from "@/store/abstractions/State";

export interface UserState extends State {
    users: User[]
};