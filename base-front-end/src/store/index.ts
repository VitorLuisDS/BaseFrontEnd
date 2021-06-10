import { createStore } from "vuex";
import userModule from "@/store/modules/user/UserModule";
import pageModule from "@/store/modules/page/PageModule";
import { State } from "@/store/abstractions/State";
import { ModuleName } from "@/store/abstractions/ModuleName";

const modules = {
  [ModuleName.UserModule]: userModule,
  [ModuleName.PageModule]: pageModule
};

export const STORE = createStore<State>({
  state: {},
  mutations: {},
  actions: {},
  modules: modules
});