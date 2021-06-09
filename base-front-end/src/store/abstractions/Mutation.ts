import { Page } from "@/models/Page";
import { MutationsTypes } from "./MutationsTypes";
import { State } from "./State";

export interface Mutation<TState extends State> {
    [MutationsTypes.Add](state: TState, payload: Page): void;
    [MutationsTypes.Initialize](state: TState): void;
};