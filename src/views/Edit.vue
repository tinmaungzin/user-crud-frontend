<template>
  <div class="edit">
    <NavBar />
    <EditComponent />
  </div>
</template>
<script>
// @ is an alias to /src
import EditComponent from "@/components/Edit.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Edit",
  components: {
    EditComponent,
    NavBar,
  },
};
</script>
