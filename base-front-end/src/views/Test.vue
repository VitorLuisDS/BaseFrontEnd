<template>
  <h1>This is a test page</h1>
  <h4>{{ label.text }}</h4>
</template>
<script lang="ts">
import { defineComponent } from "vue";
interface Hello {
  text: string;
}

class HelloClass implements Hello {
  text: string;
  constructor(params: string) {
    this.text = params;
  }
}
export default defineComponent({
  setup() {
    console.log("-setup-");
  },
  data() {
    return {
      label: {} as HelloClass,
    };
  },
  name: "Test",
  methods: {
    hello(text: string) {
      setTimeout(() => {
        this.label = new HelloClass(text);
      }, 1000);
    },
  },
  mounted() {
    this.hello("Introduction to Vue 3 + Composition Api + Typescript");
  },
});
</script>
