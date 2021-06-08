import { createStore } from "vuex";
import userModule from "@/store/module/user";
import pageModule from "@/store/module/page";
import { State } from "./State";
export const STORE = createStore<State>({
  state: {},
  mutations: {},
  actions: {},
  modules: { userModule, pageModule },
});
