import axios from 'axios'

const state = {
  userInfo: null
};

const getters = {};

const mutations = {
  setUserInfo (state, payload) {
    state.userInfo = payload;
  },
};

const actions = {
  getUserInfo ({commit, error}) {
    return axios.get('https://dev.to/api/users/me',
    {
      headers: {
        'api-key': 'ryyh5CL3TkCdVtp3Ya54Nruv',
      },
    }).then(res => {
      commit('setUserInfo', res.data);
    })
    .catch(e => {
      error(e)
    })
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
