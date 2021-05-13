<template>
  <h1>This is a test page</h1>

  <button @click="initializeUsersClick()">Initialize Users</button>
  <input v-model="id" type="number" placeholder="Id" />
  <input v-model="name" type="text" placeholder="Name" />
  <button @click="createUserClick()">Crate New User</button>

  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in users" :key="{ index }">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { usersRepository } from "@/views/compositions/users-repository";
import { User } from "@/models/User";

export default defineComponent({
  setup() {
    return { ...usersRepository(true) };
  },
  data() {
    return { id: 0, name: "" };
  },
  name: "Test",
  methods: {
    createUserClick() {
      this.createUser(new User(this.id, this.name));
    },
    initializeUsersClick() {
      this.initializeUsers();
    },
  },
});
</script>
