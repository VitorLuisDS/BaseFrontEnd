import { createStore } from "vuex";
import userModule from "@/store/module/user"
export default createStore({
  modules: { userModule },
});
