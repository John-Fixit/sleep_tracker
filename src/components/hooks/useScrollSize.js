// useWindowSize.js

import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollSize() {
  const scrollX = ref(window.scrollX);
  const scrollY = ref(window.scrollY);

  const updateScrollSize = () => {
    scrollX.value = window.scrollX;
    scrollY.value = window.scrollY;
  };

  onMounted(() => {
    window.addEventListener('scroll', updateScrollSize);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollSize);
  });

  return { scrollX, scrollY };
}
