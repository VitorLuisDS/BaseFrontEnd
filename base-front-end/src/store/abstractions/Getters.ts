import { GettersTypes } from "./GettersTypes";
import { State } from "./State";

export interface Getter<TState extends State> {
    [GettersTypes.GetAll](state: TState): Object[];
};