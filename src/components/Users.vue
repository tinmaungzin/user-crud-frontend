<template>
  <table>
    <span class="color-red" v-if="errors"
      >{{ errors }} <a href="/login">Login Again</a></span
    >
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in usersList" :key="i">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>
          <div v-if="item.id == user.id"></div>
          <div v-else>
            <a class="color-blue" :href="`/users/${item.id}/edit`">Edit</a> |
            <span @click.prevent="deleteUser(item)" class="color-red pointer"
              >Delete</span
            >
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UsersComponent",
  data() {
    return {
      users: "",
      errors: "",
      user: "",
    };
  },
  methods: {
    ...mapActions(["fetchUsers", "deleteUser"]),
  },
  computed: mapGetters(["usersList"]),
  created() {
    if (localStorage.getItem("user")) {
      this.fetchUsers();
      this.user = JSON.parse(localStorage.getItem("user"));
    } else {
      this.$router.push("/login");
    }
  },
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);
table {
  width: 750px;
  border-collapse: collapse;
  margin: 50px auto;
}

.color-blue {
  color: #3498db;
}
.color-red {
  color: red;
}
.pointer {
  cursor: pointer;
}

th {
  background: #16a085;
  color: white;
  font-weight: bold;
}

td,
th {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
  font-size: 18px;
}
</style>