<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>List users</h1>
      </v-col>
      <v-col class="text-right">
        <v-btn elevated class="bg-primary" to="/users/create">
          Create user
        </v-btn>
      </v-col>
    </v-row>
    <v-table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Year of Birth</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, key) in store.getters['userList']"
          :key="key"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.year_of_birth }}</td>
          <td class="text-right">
            <v-btn class="bg-info mr-2" :to="`/users/edit/${item.id}`">Edit</v-btn>
            <v-btn class="bg-deep-orange" @click.prevent="() => item.id && onDelete(item.id)">Delete</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup lang="ts">
import { useStore } from '~/stores'
import {UserEnum} from "~/stores/enums/user.enum";

const store = useStore()

useHead({
  title: "List users",
})

const onDelete = (id: number) => {
  var result = confirm("Are you sure delete?");
  if (result) {
    store.dispatch(UserEnum.DELETE_USER, id);
  }
}
</script>
