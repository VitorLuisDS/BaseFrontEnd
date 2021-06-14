import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
    props: {
        message: {
            type: String,
            required: false
        }
    },
    setup(props) {
        const messageToShow = ref<string>();

        onMounted(() => {
            messageToShow.value = props.message || "Not Authorized"
        });

        return { messageToShow };
    }
})