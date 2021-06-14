import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
    setup() {
        const message = ref<string>();

        onMounted(() => {
            message.value = "Page Not Found";
        });

        return { message };
    }
})