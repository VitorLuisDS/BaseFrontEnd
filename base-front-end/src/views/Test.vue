<template>
  <h4>(Test Component)</h4>
  <h1>&darr;</h1>
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
  <PagesTable />
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { usersRepository } from "@/repositories/users-repository";
import { User } from "@/models/User";
import PagesTable from "@/components/PagesTable.vue";

export default defineComponent({
  setup() {
    onMounted(async () => {
      await usersRepository().initializeUsers();
    });

    return {
      ...usersRepository(),
      users: computed((): User[] => usersRepository().getUsers()),
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
  components: {
    PagesTable,
  },
});
</script>
