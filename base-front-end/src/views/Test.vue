<template>
  <h1>This is a test page</h1>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    alert("");
  },
  name: "Test",
  methods: {
    ola() {
      alert("olá");
    },
  },
  mounted() {
    this.ola();
  },
});
</script>
