<template>
  <div class="create">
    <NavBar />
    <CreateComponent />
  </div>
</template>
<script>
// @ is an alias to /src
import CreateComponent from "@/components/Create.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Create",
  components: {
    CreateComponent,
    NavBar,
  },
};
</script>
