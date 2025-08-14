<template>
  <a 
    href="#"
    class="fixed right-11 bottom-11  max-sm:!left-80 z-[99] inline-flex items-center justify-center w-12 h-12 p-0 font-medium rounded-full text-white hover:bg-[#ff6c4b] bg-[#FE5D37] border-[#FE5D37] transition-all duration-500 hover:shadow-lg focus:ring-2 focus:!ring-[#FE5D37]/50 focus:ring-offset"
    :class="{ '!hidden': !visible, 'opacity-0': !visible, 'opacity-100': visible }"
    @click.prevent="scrollToTop"
    aria-label="Back to top"
  >
    <i class="text-xl bi bi-arrow-up"></i>
  </a>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const visible = ref(false);
    let scrollAnimationFrame = null;

    const checkScroll = () => {
      visible.value = window.scrollY > 300;
    };

    const scrollToTop = (e) => {
      e.preventDefault();
      
      // Cancel any ongoing animation
      if (scrollAnimationFrame) {
        cancelAnimationFrame(scrollAnimationFrame);
      }

      const duration = 800; // Animation duration in ms
      const start = window.scrollY;
      const startTime = performance.now();

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-in-out function for smoother animation
        const ease = progress < 0.5 
          ? 2 * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        window.scrollTo(0, start * (1 - ease));
        
        if (progress < 1) {
          scrollAnimationFrame = requestAnimationFrame(animateScroll);
        } else {
          scrollAnimationFrame = null;
        }
      };

      scrollAnimationFrame = requestAnimationFrame(animateScroll);
    };

    onMounted(() => {
      window.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll(); // Initial check
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', checkScroll);
      if (scrollAnimationFrame) {
        cancelAnimationFrame(scrollAnimationFrame);
      }
    });

    return {
      visible,
      scrollToTop
    };
  }
};
</script>