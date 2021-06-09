import { createStore } from "vuex";
import userModule from "@/store/modules/user/UserModule";
import pageModule from "@/store/modules/page/PageModule";
import { State } from "./abstractions/State";
import { ModulesNames } from "./abstractions/ModulesNames";

const modules = {
  [ModulesNames.UserModule]: userModule,
  [ModulesNames.PageModule]: pageModule
};

export const STORE = createStore<State>({
  state: {},
  mutations: {},
  actions: {},
  modules: modules
});