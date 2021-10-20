import axios from "axios";

const state = {
  users: [],
  errors: "",
  user: {},
  auth_user: {},
};

const getters = {
  usersList: (state) => state.users,
  errors: (state) => state.errors,
  user: (state) => state.user,
};

const actions = {
  async fetchUsers({ commit }) {
    const response = await axios.get("users");
    commit("setUsers", response.data.users);
  },
  async fetchUser({ commit }, id) {
    const response = await axios.get(`users/${id}`);
    commit("setUser", response.data.user);
  },
  async addUsers({ commit }, user) {
    let errors = "";
    const response = await axios
      .post("users", user)
      .catch((err) => (errors = err));
    if (errors) {
      commit("setErrors", errors.response.data.message);
      return "error";
    } else {
      commit("addNewUser", response.data);
      return "success";
    }
  },
  async editUsers({ commit }, user) {
    let errors = "";
    const response = await axios
      .put(`users/${user.id}`, user)
      .catch((err) => (errors = err));
    if (errors) {
      commit("setErrors", errors.response.data.message);
      return "error";
    } else {
      commit("addNewUser", response.data);
      return "success";
    }
  },
  async deleteUser({ commit }, user) {
    await axios.delete(`users/${user.id}`);
    commit("removeUser", user.id);
  },
};

const mutations = {
  setErrors: (state, errors) => (state.errors = errors),
  setUsers: (state, users) => (state.users = users),
  setUser: (state, user) => (state.user = user),
  addNewUser: (state, user) => state.users.unshift(user),
  removeUser: (state, id) =>
    state.users.splice(
      state.users.findIndex((item) => item.id === id),
      1
    ),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
