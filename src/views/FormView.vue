<template>
  <div>
    <transition name="fade">
      <form-user></form-user>
    </transition>
  </div>
</template>

<script>
import formUser from "../components/FormUser";

export default {
  name: "formView",
  components: {
    "form-user": formUser
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
