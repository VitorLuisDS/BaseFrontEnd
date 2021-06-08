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
      <tr v-for="(user, index) in usersStore" :key="{ index }">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
      </tr>
    </tbody>
  </table>
  <table>
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(page, index) in pagesStore" :key="{ index }">
        <td>{{ page.name }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
// import { usersRepository } from "@/views/compositions/users-repository";
import { User } from "@/models/User";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("userModule/initializeUsers");
      store.dispatch("pageModule/initializePages");
    });

    const createUser = (user: User) =>
      store.dispatch("userModule/addUser", user);
    const initializeUsers = () => store.dispatch("userModule/initializeUsers");

    return {
      // ...usersRepository(true),
      createUser,
      initializeUsers,
      usersStore: computed(() => store.getters["userModule/getUsers"]),
      pagesStore: computed(() => store.getters["pageModule/getPages"]),
    };
  },
  data() {
    return { id: 0, name: "" };
  },
  name: "Test",
  methods: {
    async createUserClick() {
      await this.createUser(new User(this.id, this.name));
    },
    async initializeUsersClick() {
      await this.initializeUsers();
    },
  },
});
</script>
