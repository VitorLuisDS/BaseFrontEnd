<template>
  <h1>This is a test page</h1>
  <button @click="createUserClick()">Crate New User</button>
  <button @click="initializeUsersClick()">Initialize Users</button>
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
import { defineComponent, onMounted } from "vue";
import { usersRepository } from "@/views/compositions/users-repository";
import { User } from "@/models/User";

export default defineComponent({
  setup() {
    return { ...usersRepository(true) };
  },
  data() {
    return {};
  },
  name: "Test",
  methods: {
    createUserClick() {
      this.createUser(new User(Math.floor(Math.random() * 100), "Vitor"));
    },
    initializeUsersClick() {
      this.initializeUsers();
    },
  },
});
</script>
