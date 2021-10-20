<template>
  <div id="login-box">
    <div class="left">
      <h1>Edit User</h1>
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="user.name" placeholder="Username" />
        <span class="color-red" v-if="errors.name">{{ errors.name[0] }}</span>
        <input type="text" v-model="user.email" placeholder="E-mail" />
        <span class="color-red" v-if="errors.email">{{ errors.email[0] }}</span>

        <input type="submit" name="signup_submit" value="Update" />
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "EditComponent",
  data() {
    return {
      username: "",
      email: "",
    };
  },
  methods: {
    ...mapActions(["editUsers", "fetchUser"]),
    async handleSubmit() {
      const data = {
        name: this.user.name,
        email: this.user.email,
        id: this.user.id,
      };
      const msg = await this.editUsers(data);
      if (msg == "success") this.$router.push("/users");
    },
  },
  created() {
    this.fetchUser(this.$route.params.id);
  },
  computed: mapGetters(["errors", "user"]),
};
</script>


<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);
*:focus {
  outline: none;
}
.color-red {
  color: red;
  font-size: 12px;
}

body {
  margin: 0;
  padding: 0;
  background: #ddd;
  font-size: 16px;
  color: #222;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
}

#login-box {
  position: relative;
  margin: 5% auto;
  width: 300px;
  height: 350px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.left {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 40px;
  width: 300px;
  height: 400px;
}

h1 {
  margin: 0 0 20px 0;
  font-weight: 300;
  font-size: 28px;
}

input[type="text"],
input[type="password"] {
  display: block;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 4px;
  width: 220px;
  height: 32px;
  border: none;
  border-bottom: 1px solid #aaa;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 15px;
  transition: 0.2s ease;
}

input[type="text"]:focus,
input[type="password"]:focus {
  border-bottom: 2px solid #16a085;
  color: #16a085;
  transition: 0.2s ease;
}

input[type="submit"] {
  margin-top: 28px;
  width: 120px;
  height: 32px;
  background: #16a085;
  border: none;
  border-radius: 2px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: 0.1s ease;
  cursor: pointer;
}

input[type="submit"]:hover,
input[type="submit"]:focus {
  opacity: 0.8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  transition: 0.1s ease;
}

input[type="submit"]:active {
  opacity: 1;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  transition: 0.1s ease;
}

.or {
  position: absolute;
  top: 180px;
  left: 280px;
  width: 40px;
  height: 40px;
  background: #ddd;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  line-height: 40px;
  text-align: center;
}
</style>
