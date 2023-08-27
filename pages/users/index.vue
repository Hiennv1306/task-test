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
        v-for="(item, key) in data"
        :key="key"
      >
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.year_of_birth }}</td>
        <td class="text-right">
          <v-btn class="bg-primary mr-2">Edit</v-btn>
          <v-btn class="bg-deep-orange">Delete</v-btn>
        </td>
      </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup lang="ts">
import { useStore } from '~/stores'
import {UserInterface} from "~/interfaces/modules/User.interface";

const store = useStore()

useHead({
  title: "List users",
})

let data: UserInterface[] = store.getters['userList']
</script>
