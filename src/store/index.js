import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Swal from "sweetalert2";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usersx: [],
    newIdToNewUser: 10
  },
  mutations: {
    incrementIdUser(state) {
      state.newIdToNewUser++;
    },
    setUsers(state, payload) {
      state.usersx = payload;
    },
    createOneUserx(state, payload) {
      state.usersx.push(payload);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Datos Guardados Satisfactoriamente",
        showConfirmButton: false,
        timer: 1500
      });
      router.push({ name: "Home" });
    },
    editOneUserx(state, payload) {
      let oneuser = state.usersx.filter(x => {
        return x.id == payload;
      });
      router.push({ name: "Formulario", params: { dw: oneuser } });
    },
    setEdithOneUser(state, payload) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Datos Editados Correctamente",
        showConfirmButton: false,
        timer: 1500
      });
      let buscado = state.usersx
        .map(x => {
          return x.id;
        })
        .indexOf(payload.id);
      state.usersx.splice(buscado, 1);
      state.usersx.push(payload);
      state.usersx.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        } else {
          return -1;
        }
      });
      router.push({ name: "Home" });
    },
    deleteOneUserx(state, payload) {
      var removeForIndex = state.usersx
        .map(function(item) {
          return item.id;
        })
        .indexOf(payload);
      Swal.fire({
        title: "Estas apunto de borrar un usuario",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `BORRAR`,
        denyButtonText: `CANCELAR`,
        allowOutsideClick: false
      }).then(result => {
        if (result.isConfirmed) {
          state.usersx.splice(removeForIndex, 1);
        } else if (result.isDenied) {
        }
      });
    }
  },
  actions: {
    GET_USERS(context) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
          this.commit("setUsers", res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    DELETE_USERS(context) {
      axios.delete("https://jsonplaceholder.typicode.com/users/1");
    }
  },
  getters: {
    getUsersState(state) {
      return state.usersx;
    }
  },
  modules: {}
});
