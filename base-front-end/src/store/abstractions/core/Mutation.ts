import { Page } from "@/models/Page";
import { State } from "@/store/abstractions/State";
import { MutationsTypes } from "@/store/abstractions/core/types/MutationsTypes";

export interface Mutation<TState extends State> {
    [MutationsTypes.Add](state: TState, payload: Page): void;
    [MutationsTypes.Initialize](state: TState): void;
};