<template>
  <section class="py-16 bg-white">
    <div class="container px-4 mx-auto">
      <div class="flex flex-col items-center gap-12 lg:flex-row">
        <!-- Text Content -->
        <div 
          ref="textContent"
          class="relative transition-all duration-500 ease-out lg:w-1/2 top-10  max-sm:!mx-auto"
          :class="{
            'opacity-0 translate-y-30': !textVisible,
            'animate-fadeInUp': textVisible
          }"
        >
          <h1 class="relative text-4xl font-bold text-gray-800 max-sm:!text-3xl max-sm:!bottom-8 bottom-15">"Découvrez comment nous façonnons les leaders de demain"</h1>
          <p class="text-[18px] text-gray-600 bottom-30 max-sm:!text-base  mt-0 mb-4 block [margin-block-start:1em] [margin-block-end:1em] [margin-inline-start:0] [margin-inline-end:0] [unicode-bidi:isolate]">
            "Nous transformons notre communauté par des initiatives innovantes. Découvrez comment nous formons les leaders de demain
            en exploitant le potentiel des enfants. Grâce à nos programmes, nous leur offrons des opportunités uniques pour
            développer leurs compétences et devenir des entrepreneurs."
          </p>
          <div class="flex flex-col max-sm:!relative max-sm:!right-99 items-center gap-4 mt-2 sm:flex-row">
            <div class="relative flex items-center gap-3 ml-8 left-80">
              <img src="@/assets/images/ceo.png" alt="CEO" class="w-12 h-12 rounded-full">
              <div>
                <p class="font-medium text-[#FE5D37] text-lg">Bahaeddine Kacem</p>
                <p class="text-sm text-gray-500">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image Gallery -->
        <div 
          ref="imageGallery"
          class="grid grid-cols-2 gap-4 lg:w-1/2 max-sm:!relative max-sm:!top-10"
          :class="{
              'opacity-0 translate-y-30': !galleryVisible,
              'animate-fadeInUp': galleryVisible,
              'delay-300': true
            }"
        >
          <div @click="setActive1"  
            class="flex justify-center col-span-2 transition-all duration-500 ease-out"
          >
            <img src="@/assets/images/doura2.jpg" alt="About 1" :class="['w-3/4 !border-15 !border-[#fdf3ee] hover:!border-[#1852d9] rounded-full shadow-lg', isActive1 ? 'max-sm:!border-[#1852d9]' : 'max-sm:border-[#fdf3ee]']">
          </div>
          <div @click="setActive2" 
            class="flex justify-start transition-all duration-500 ease-out -mt-45"
          >
            <img src="@/assets/images/doura1.jpg" alt="About 2" :class="['w-full !border-15 !border-[#fdf3ee] hover:!border-[#1852d9] rounded-full shadow-lg', isActive2 ? 'max-sm:!border-[#1852d9]' : 'max-sm:border-[#fdf3ee]']">
          </div>
          <div @click="setActive3" 
            class="flex justify-end transition-all duration-500 ease-out -mt-45"
          >
            <img src="@/assets/images/doura3.jpg" alt="About 3" :class="['w-full !border-15 !border-[#fdf3ee] hover:!border-[#1852d9] rounded-full shadow-lg', isActive3 ? 'max-sm:!border-[#1852d9]' : 'max-sm:border-[#fdf3ee]']">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const textContent = ref(null);
const imageGallery = ref(null);

const textVisible = ref(false);
const galleryVisible = ref(false);
const isActive1 = ref(false);
const isActive2 = ref(false);
const isActive3 = ref(false);
const setActive1 =()=>{
  isActive1.value=true;
  isActive2.value=false;
  isActive3.value=false;
}
const setActive2 =()=>{
  isActive1.value=false;
  isActive2.value=true;
  isActive3.value=false;
}
const setActive3 =()=>{
  isActive1.value=false;
  isActive2.value=false;
  isActive3.value=true;
}

const handleScroll = () => {
  if (!textContent.value || !imageGallery.value) return;
  
  const textRect = textContent.value.getBoundingClientRect();
  const galleryRect = imageGallery.value.getBoundingClientRect();
  
  const isTextInView = (
    textRect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    textRect.bottom >= 0
  );
  
  const isGalleryInView = (
    galleryRect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    galleryRect.bottom >= 0
  );
  
  if (isTextInView) {
    textVisible.value = true;
    // Only show gallery after text has appeared
    setTimeout(() => {
      galleryVisible.value = true;
    }, 300); // 300ms after text appears
  }
  
  if (isTextInView && isGalleryInView) {
    window.removeEventListener('scroll', handleScroll);
  }
};

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>