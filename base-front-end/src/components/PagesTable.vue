<template>
  <h4>(Pages Component)</h4>
  <h1>&darr;</h1>
  <table>
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(page, index) in pages" :key="{ index }">
        <td>{{ page.name }}</td>
      </tr>
    </tbody>
  </table>
  <button @click="initializeUsersClick()">Initialize Users</button>
</template>
<script lang="ts">
import { pagesRepository } from "@/repositories/pages-repository";
import { usersRepository } from "@/repositories/users-repository";
import { computed, defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    onMounted(async () => {
      await pagesRepository().initializePages();
    });

    const initializeUsers = async () =>
      await usersRepository().initializeUsers();

    return {
      initializeUsers,
      ...pagesRepository(),
      pages: computed(() => pagesRepository().getPages()),
    };
  },
  name: "PagesTable",
  methods: {
    async initializeUsersClick() {
      await this.initializeUsers();
    },
  },
});
</script>
