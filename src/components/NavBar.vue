<template>
  <div class="container">
    <p class="left"><a href="/users">Home</a></p>
    <div class="right">
      <p class="username">{{ user.name }}</p>
      <p v-if="user" class="add"><a href="/users/create">Add New User</a></p>
      <p v-if="user" class="logout" @click.prevent="logout">
        <a href="#">Logout</a>
      </p>
      <p v-if="!user" class="logout"><a href="/login">Login</a></p>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      user: "",
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
  created() {
    if (localStorage.getItem("user")) {
      this.user = JSON.parse(localStorage.getItem("user"));
    } else {
      this.$router.push("/login");
    }
  },
};
</script>
<style scoped>
.container {
  display: flex;
  background: #16a085;
  width: 100%;
  justify-content: space-between;
  color: white;
}
.right {
  display: flex;
  margin-right: 20px;
}
.left {
  margin-left: 20px;
}
.left a {
  text-decoration: none;
  color: white;
}
.right a {
  text-decoration: none;
  color: white;
}
.username {
  margin-right: 20px;
}
.add {
  margin-right: 20px;
}
</style>