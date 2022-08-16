import { Store } from 'vuex'
import userInfo from "./modules/userInfo";

const createStore = () => {
  return new Store({
    modules: { userInfo },
    state: {},
    mutations: {},
    actions: {},
  })
}

export default createStore;
