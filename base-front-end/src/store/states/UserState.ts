import { User } from "@/models/User";
import { State } from "../abstractions/State";

export interface UserState extends State {
    users: User[]
};