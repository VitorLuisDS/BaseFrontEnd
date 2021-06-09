import { createStore } from "vuex";
import userModule from "@/store/modules/user/UserModule";
import pageModule from "@/store/modules/page/PageModule";
import { State } from "./abstractions/State";

export const STORE = createStore<State>({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    userModule, pageModule
  }
});