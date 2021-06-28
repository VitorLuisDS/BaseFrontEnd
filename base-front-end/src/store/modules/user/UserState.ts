import { UserTest } from "@/models/UserTest";
import { State } from "@/store/abstractions/State";

export interface UserState extends State {
    users: UserTest[]
};