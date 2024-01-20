import { onMounted, onUnmounted } from "vue";

export default function onKeydown(handler) {
  onMounted(() => {
    window.addEventListener("keydown", handler);
  });
  onUnmounted(() => {
    window.removeEventListener("keydown", handler);
  });
}
