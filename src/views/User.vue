<template>
  <div class="user">
    <NavBar />
    <UsersComponent v-bind:items="users" />
  </div>
</template>
<script>
// @ is an alias to /src
import UsersComponent from "@/components/Users.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "User",
  components: {
    UsersComponent,
    NavBar,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    // const store = useStore();
    // this.$store.commit("GET_USERS");
    // this.users = computed(() => store.state.users);
    // this.users = this.$store.state.users;
    // console.log(this.users);
  },
};
</script>
