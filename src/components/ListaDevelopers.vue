<template>
  <div class="lista">
    <h4>Lista de Developers</h4>
    <div class="lista-ul">
      <ul>
        <li class="lista-ul-li" v-for="(dev, i) in developers" :key="i">
          <span :class="{ done: dev.done }" v-on:click="marcar(dev)">
            {{ dev.id }}) <strong>{{ dev.name }} </strong> tiene
            {{ dev.age }} años.
          </span>
          <span>
            <button v-on:click="editarDeveloper(i)">Editar</button>
            <button v-on:click="eliminarDeveloper(i)">Eliminar</button>
          </span>
        </li>
      </ul>
    </div>
    <div>
      <button v-on:click="marcarAll">Marcar todas</button>
      <button v-on:click="desmarcarAll">Desmarcar todas</button>
      <button v-on:click="deleteAll">Eliminar todas</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "ListaDevelopers",
  computed: {
    ...mapState(["developers"]),
  },
  methods: {
    ...mapMutations([
      "eliminarDeveloper",
      "editarDeveloper",
      "marcar",
      "marcarAll",
      "desmarcarAll",
      "deleteAll",
    ]),
  },
};
</script>

<style>
.lista {
  border: 2px solid plum;
  margin: 5px;
  padding: 10px;
}
.lista-ul {
  text-align: left;
  display: inline-block;
}
.lista-ul-li {
  margin: 7px;
}
.done {
  text-decoration: line-through;
}
</style>
