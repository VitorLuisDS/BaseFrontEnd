import { PageTest } from "@/models/PageTest";
import { State } from "@/store/abstractions/State";

export interface PageState extends State {
    pages: PageTest[]
};