import { createStore } from "vuex";
import { State } from "@/store/abstractions/State";
import { ModuleName } from "@/store/abstractions/core/ModuleName";
import authenticationModule from "./modules/authentication/authentication.module";

const modules = {
  [ModuleName.AuthenticationModule]: authenticationModule,
};

export const STORE = createStore<State>({
  state: {},
  mutations: {},
  actions: {},
  modules: modules
});