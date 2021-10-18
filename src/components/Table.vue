<template>
  <table>
	 
	<tbody>
		 
		<tbody class="labels">
			<tr>
				<td colspan="5">
					<label for="management">Users</label>
				</td>
			</tr>
		</tbody>
		<tbody class="hide">
			<tr>
				<td>Tin Maung Zin</td>
				<td>tmz@mail.com</td>
				<td> <a class="color-blue" href="">Edit</a>    | <a class="color-red" href="">Delete</a></td>
			</tr>
            <tr>
				<td>May Thazin Khin</td>
				<td>mtzk@mail.com</td>
				<td> <a class="color-blue" href="">Edit</a>    | <a class="color-red" href="">Delete</a></td>
			</tr>
            <tr>
				<td>Aung Myo Khaing</td>
				<td>amk@mail.com</td>
				<td> <a class="color-blue" href="">Edit</a>    | <a class="color-red" href="">Delete</a></td>
			</tr>
		</tbody>		
	</tbody>
</table>
</template>
<script>
export default {
  name: "TableComponent",
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

th {
  background: #3498db;
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

.labels tr td {
  background-color: #2cc16a;
  font-weight: bold;
  color: #fff;
}

.label tr td label {
  display: block;
}

[data-toggle="toggle"] {
  display: none;
}
</style>