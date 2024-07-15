import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    token: null,
    user: null,
    result: null,
    error: null,
    operation: null, 
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
    setResult(state, result) {
      state.result = result;
    },
    setError(state, error) {
      state.error = error;
    },
    setOperation(state, operation) {
      state.operation = operation; 
    },
  },
  actions: {
    async register({ commit }, credentials) {
      try {
        const response = await axios.post('http://localhost:8000/api/account/register/', credentials);
        commit('setToken', response.data.data.access);
      } catch (error) {
        commit('setError', error.response ? error.response.data.message : 'Registration failed');
        throw error;
      }
    },
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('http://localhost:8000/api/account/login/', credentials);
        commit('setToken', response.data.data.token.access);
        commit('setUser', response.data.data.user);
      } catch (error) {
        commit('setError', error.response ? error.response.data.message : 'Login failed');
        throw error;
      }
    },
    logout({ commit }) {
      commit('setToken', null);
      commit('setUser', null);
    },
    async performOperation({ commit, state }, { num1, num2 }) {
      try {
        
        if (!state.operation) {
          commit('setError', 'Operation type is not set');
          return;
        }
        
        const response = await axios.post(
          `http://localhost:8000/api/arthop/${state.operation}/`, 
          { num1, num2 },
          {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          }
        );
        commit('setResult', response.data.result);
        commit('setError', null);
      } catch (error) {
        commit('setResult', null);
        commit('setError', error.response ? error.response.data.message : 'Operation failed');
        throw error;
      }
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    loggedInUser(state) {
      return state.user;
    },
    result(state) {
      return state.result;
    },
    error(state) {
      return state.error;
    },
    operation(state) {
      return state.operation;
    },
  },
});
