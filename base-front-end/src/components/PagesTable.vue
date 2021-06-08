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
import { pagesRepository } from "@/views/compositions/pages-repository";
import { usersRepository } from "@/views/compositions/users-repository";
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    onMounted(async () => {
      await pagesRepository(store).initializePages();
    });

    const initializeUsers = async () =>
      await usersRepository(store).initializeUsers();

    return {
      initializeUsers,
      ...pagesRepository(store),
      pages: computed(() => pagesRepository(store).getPages()),
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
