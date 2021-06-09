import { Page } from "@/models/Page";
import { State } from "../abstractions/State";

export interface PageState extends State {
    pages: Page[]
};