import axios from "axios";

const state = {
  userInfo: null,
};

const getters = {
  userInfo(state) {
    return state.userInfo;
  },
};

const mutations = {
  setUserInfo(state, payload) {
    state.userInfo = payload;
  },
  clearUserInfo(state) {
    state.userInfo = null;
  },
};

const actions = {
  getUserInfo({ commit, error }, payload) {
    return axios
      .get("https://dev.to/api/users/me", {
        headers: {
          "api-key": payload,
        },
      })
      .then((res) => {
        commit("setUserInfo", res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
