import { createStore } from "vuex";
import userModule from "@/store/modules/user/user.module";
import pageModule from "@/store/modules/page/page.module";
import { State } from "@/store/abstractions/State";
import { ModuleName } from "@/store/abstractions/ModuleName";
import authenticationModule from "./modules/authentication/authentication.module";

const modules = {
  [ModuleName.UserModule]: userModule,
  [ModuleName.PageModule]: pageModule,
  [ModuleName.AuthModule]: authenticationModule,
};

export const STORE = createStore<State>({
  state: {},
  mutations: {},
  actions: {},
  modules: modules
});