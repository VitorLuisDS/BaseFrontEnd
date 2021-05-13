<template>
  <h1>This is a test page</h1>
  <button @click="createUserPage()">Crate New User</button>
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
    // const users = ref<User[]>();
    // const getUsers = () => {
    //   users.value = usersRepository.getUsers();
    // };

    // onMounted(getUsers);

    return { ...usersRepository() };
  },
  data() {
    return {};
  },
  name: "Test",
  methods: {
    createUserPage() {
      this.createUser(new User(Math.floor(Math.random() * 100), "Vitor"));
    },
  },
});
</script>
