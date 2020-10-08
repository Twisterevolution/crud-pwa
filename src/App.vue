<template>
  <v-app>
    <navbar></navbar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import navbar from "./components/MyNavBar";

export default {
  name: "App",

  components: {
    navbar
  },

  data: () => ({
    //
  })
};
</script>

<style></style>
