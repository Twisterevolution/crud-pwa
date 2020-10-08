<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>ADMINITRACION DE USUARIOS</h1>
        <v-btn @click="goCreateNewUser" color="success" class="mb-5"
          >CREAR NUEVO USUARIO</v-btn
        >
        <v-data-table
          :headers="headers"
          :items="getUsersState"
          :items-per-page="5"
          class="elevation-3"
        >
          <template v-slot:[`item.acciones`]="{ item }">
            <v-icon class="mr-2" @click="editUserById(item.id)">
              mdi-pencil
            </v-icon>
            <v-icon @click="deleteOneUserx(item.id)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "listPincincipal",
  props: {},
  data() {
    return {
      headers: [
        { text: "Nombre", value: "name" },
        { text: "Usuario", value: "username" },
        { text: "Email", value: "email" },
        { text: "SitioWeb", value: "website" },
        { text: "Acciones", value: "acciones" }
      ]
    };
  },
  methods: {
    ...mapMutations(["deleteOneUserx"]),
    editUserById: function(id) {
      this.$router.push({
        name: "Formulario",
        params: { id: id, do: "EDITAR USUARIO" }
      });
    },
    goCreateNewUser: function() {
      this.$router.push({
        name: "Formulario",
        params: { do: "CREAR NUEVO USUARIO" }
      });
    }
  },
  computed: {
    ...mapGetters(["getUsersState"])
  }
};
</script>

<style></style>
