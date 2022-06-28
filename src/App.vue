<template>
  <div id="app">
    <h2>ToDo Básico Developers</h2>
    <button @click="obtenerData">Obtener Data</button>
    <Formulario />
    <ListaDevelopers />
  </div>
</template>

<script>
import Formulario from "./components/Formulario.vue";
import ListaDevelopers from "./components/ListaDevelopers.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Formulario,
    ListaDevelopers,
  },
  computed: {
    ...mapState(["developers"]),
  },
  methods: {
    ...mapActions(["obtenerData"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
