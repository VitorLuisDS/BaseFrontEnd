import { createStore } from "vuex";
import userModule from "@/store/module/user";
import pageModule from "@/store/module/page";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { userModule, pageModule },
});
