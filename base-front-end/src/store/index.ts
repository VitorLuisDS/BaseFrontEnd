import { createStore } from "vuex";
import { State } from "@/store/abstractions/State";
import { ModuleName } from "@/store/abstractions/core/ModuleName";
import authenticationModule from "./modules/authentication/authentication.module";
import authorizationModule from "./modules/authorization/authorization.module";

const modules = {
  [ModuleName.AuthenticationModule]: authenticationModule,
  [ModuleName.AuthorizationModule]: authorizationModule,
};

export const STORE = createStore<State>({
  state: {},
  mutations: {},
  actions: {},
  modules: modules
});