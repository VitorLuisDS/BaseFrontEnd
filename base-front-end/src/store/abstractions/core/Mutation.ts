import { Page } from "@/models/Page";
import { State } from "@/store/abstractions/State";
import { MutationType } from "@/store/abstractions/core/types/MutationType";

export interface Mutation<TState extends State> {
    [MutationType.Add](state: TState, payload: Page): void;
    [MutationType.Initialize](state: TState): void;
};