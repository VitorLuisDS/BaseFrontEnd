<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, watch } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    watch(
      () => route.name,
      () => {
        document.title = (route.meta.title as string) || "Base Front-End App";
      }
    );
  },
});
</script>
