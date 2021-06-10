import { State } from "@/store/abstractions/State";
import { GetterType } from "@/store/abstractions/core/types/GetterType";

export interface Getter<TState extends State> {
    [GetterType.GetAll](state: TState): Object[];
};