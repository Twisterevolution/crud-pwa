<template>
  <div class="home">
    <principalList></principalList>
  </div>
</template>

<script>
// @ is an alias to /src
import principalList from "@/components/PrincipalList.vue";

export default {
  name: "Home",
  components: {
    principalList
  }
};
</script>
