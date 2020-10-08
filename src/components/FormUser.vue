<template>
  <v-form ref="form" lazy-validation v-model="valid">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="12">
          <v-card class="mx-auto" max-width="700" outlined elevation="10">
            <v-col cols="12" md="12">
              <h1>{{ $route.params.do }}</h1>
            </v-col>
            <v-row justify="center" class="mx-5">
              <v-col cols="12" md="5">
                <v-text-field
                  autofocus
                  v-model="formUsuarioData.name"
                  label="Nombre"
                  :rules="nameRules"
                  outlined
                  required
                ></v-text-field>

                <v-text-field
                  v-model="formUsuarioData.username"
                  label="Usuario"
                  :rules="nameRules"
                  outlined
                  required
                  elevation="10"
                ></v-text-field>

                <v-text-field
                  v-model="formUsuarioData.email"
                  :rules="emailRules"
                  label="E-mail"
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="5">
                <v-text-field
                  v-model="formUsuarioData.address.city"
                  label="Ciudad"
                  :rules="nameRules"
                  outlined
                  required
                ></v-text-field>
                <v-text-field
                  v-model="formUsuarioData.website"
                  label="Sitio-Web"
                  :rules="nameRules"
                  outlined
                  required
                ></v-text-field>
                <v-text-field
                  v-model="formUsuarioData.address.zipcode"
                  label="codigo-postal"
                  :rules="nameRules"
                  outlined
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-col cols="12" md="12" class="ml-5">
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="createOrEdit"
              >
                GUARDAR
              </v-btn>
              <v-btn color="" class="mr-4" @click="$router.go(-1)">
                CANCELAR
              </v-btn>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "formUserComp",
  props: {
    formTitle: String
  },
  data() {
    return {
      valid: true,
      nameRules: [v => !!v || "Dato Obligatorio"],
      emailRules: [
        v => !!v || "E-mail es obligatorio",
        v => /.+@.+/.test(v) || "Debe ser formato valido"
      ],
      formUsuarioData: {
        id: "",
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          city: "",
          zipcode: ""
        },
        website: ""
      },
      userConsult: {}
    };
  },
  methods: {
    ...mapMutations([
      "createOneUserx",
      "editOneUserx",
      "setEdithOneUser",
      "incrementIdUser"
    ]),
    getOneUser: function() {
      if (this.$route.params.id > 0) {
        let user = this.$store.state.usersx.find(x => {
          return x.id == this.$route.params.id;
        });
        this.formUsuarioData = user;
      }
    },
    createOrEdit: function() {
      if (this.formUsuarioData.id == "") {
        this.incrementIdUser();
        let newId = this.$store.state.newIdToNewUser;
        this.formUsuarioData.id = newId;
        this.createOneUserx(this.formUsuarioData);
      } else {
        this.setEdithOneUser(this.formUsuarioData);
      }
    }
  },
  mounted() {
    this.getOneUser();
  }
};
</script>

<style scoped>
* {
  border: 0px solid;
}
</style>
