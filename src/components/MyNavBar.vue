<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="../assets/logo.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://unabase.cl/#/home"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn @click="open" text>
      <span class="mr-2">TEST UNABASE</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "navbar",

  methods: {
    open: function() {
      window.open("https://unabase.cl/#/home");
    }
  }
};
</script>
