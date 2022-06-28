import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    developers: [],
    // { id: 1, name: "Aurelio", age: 29, done: false },
    // { id: 2, name: "Toni", age: 25, done: false },
    // { id: 3, name: "José", age: 28, done: false },
    // { id: 4, name: "Alan", age: 31, done: false },
    newNameDeveloper: "",
    newAgeDeveloper: null,
  },
  getters: {},
  mutations: {
    updateNewName(state, newNameDeveloper) {
      state.newNameDeveloper = newNameDeveloper;
    },
    updateNewAge(state, newAgeDeveloper) {
      state.newAgeDeveloper = newAgeDeveloper;
    },

    agregarDeveloper(state, datosNuevos) {
      state.developers.push({
        id: datosNuevos[0] + 1,
        name: datosNuevos[1],
        age: Number(datosNuevos[2]),
        done: false,
      });
      state.newNameDeveloper = "";
      state.newAgeDeveloper = null;
    },
    editarDeveloper(state, i) {},
    eliminarDeveloper(state, i) {
      state.developers.splice(i, 1);
    },
    deleteAll(state) {
      state.developers.splice(0);
      // console.log(state.developers);
    },
    marcar(state, dev) {
      dev.done = !dev.done;
      // console.log(dev.done);
      // console.log(state);
    },
    marcarAll(state) {
      // console.log(state);
      state.developers.forEach((dev) => (dev.done = true));
    },
    desmarcarAll(state) {
      state.developers.forEach((dev) => (dev.done = false));
    },
    limpiar(state) {
      state.newNameDeveloper = "";
      state.newAgeDeveloper = null;
    },
    llenarDevelopers(state, developersA) {
      state.developers = developersA;
    },
  },
  actions: {
    obtenerData: async function ({ commit }) {
      const data = await fetch("data.json");
      const developers = await data.json();
      commit("llenarDevelopers", developers);
    },
  },
  modules: {},
});
