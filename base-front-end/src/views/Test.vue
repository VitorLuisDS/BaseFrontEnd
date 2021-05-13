<template>
  <h1>This is a test page</h1>
  <h4>{{ label.text }}</h4>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { commonMethods } from "@/views/compositions/Test";
interface Hello {
  text: string;

  log(params: string): void;
}

class HelloClass implements Hello {
  text: string;

  log(params: string) {
    console.log(params);
  }

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
        this.label.log(text);
        commonMethods.someMethod();
      }, 1000);
    },
  },
  mounted() {
    this.hello("Introduction to Vue 3 + Composition Api + Typescript");
  },
});
</script>
