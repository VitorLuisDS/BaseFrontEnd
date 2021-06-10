import { State } from "@/store/abstractions/State";
import { GettersTypes } from "@/store/abstractions/core/types/GettersTypes";

export interface Getter<TState extends State> {
    [GettersTypes.GetAll](state: TState): Object[];
};