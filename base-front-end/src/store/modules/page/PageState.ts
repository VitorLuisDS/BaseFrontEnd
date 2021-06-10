import { Page } from "@/models/Page";
import { State } from "@/store/abstractions/State";

export interface PageState extends State {
    pages: Page[]
};