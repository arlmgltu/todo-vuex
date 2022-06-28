<template>
  <div class="form">
    <h3>Formulario</h3>
    <div>
      <label for="name">Nombre: </label>
      <input
        type="text"
        id="name"
        :value="newNameDeveloper"
        @input="updateNewName"
      />
      <br /><br />
      <label for="age">Edad: </label>
      <input
        type="number"
        id="age"
        :value="newAgeDeveloper"
        @input="updateNewAge"
        @keyup.enter="
          agregarDeveloper([
            developers.length,
            newNameDeveloper,
            newAgeDeveloper,
          ])
        "
      />
      <br /><br />
      <button
        v-on:click="
          agregarDeveloper([
            developers.length,
            newNameDeveloper,
            newAgeDeveloper,
          ])
        "
      >
        Agregar
      </button>
      <button v-on:click="limpiar">Limpiar</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["developers"]),
    ...mapState({
      newNameDeveloper: (state) => state.newNameDeveloper,
      newAgeDeveloper: (state) => state.newAgeDeveloper,
    }),
  },
  methods: {
    ...mapMutations(["agregarDeveloper", "limpiar"]),
    updateNewName(e) {
      this.$store.commit("updateNewName", e.target.value);
    },
    updateNewAge(e) {
      this.$store.commit("updateNewAge", e.target.value);
    },
  },
};
</script>

<style>
.form {
  border: 2px solid plum;
  margin: 5px;
  padding: 10px;
}
</style>
