<template>
  <div class="user">
    <TableComponent />
  </div>
</template>
<script>
// @ is an alias to /src
import TableComponent from "@/components/Table.vue";

export default {
  name: "User",
  components: {
    TableComponent,
  },
};
</script>
