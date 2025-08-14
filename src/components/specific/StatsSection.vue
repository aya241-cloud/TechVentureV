<template>
  <section class="py-20  max-sm:!relative max-sm:!bottom-[-1100px]">
    <div class="container px-4 mx-auto">
      <div
        ref="element"
        :class="[
          isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20',
          'will-change-transform'
        ]"
      >
        <div class="max-w-2xl mx-auto mb-12 text-center">
          <h1 class="mb-4 text-5xl font-bold text-gray-800 max-sm:!text-3xl">Nos Statistiques</h1>
          <p class="text-gray-600 max-sm:!text-base">
            Découvrez les statistiques clés qui reflètent notre engagement envers l'excellence en éducation. Nous sommes fiers
            d'offrir un environnement propice à l'épanouissement de nos étudiants.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <!-- Stat 1 -->
        <div
          ref="stat1"
          class="transition-all duration-300 ease-out"
          :class="{
            'opacity-0 translate-y-10': !stat1Visible,
            'animate-fadeInUp': stat1Visible,
            'delay-100': true
          }"
        >
          <div class="bg-[#fdf3ee] max-sm: p-6 text-center rounded-[15px] shadow-lg transition-transform duration-300 hover:-translate-y-[5px]">
            <div class="w-18 h-18 mt-0 ml-2 mb-4 bg-[#FE5D37] rounded-full flex items-center justify-center">
              <i class="text-3xl text-white fas fa-user-graduate"></i>
            </div>
            <h3 class="text-3xl font-bold text-[#FE5D37] max-sm:!text-2xl mb-2">Enfants Inscrits</h3>
            <p class="text-4xl font-bold text-gray-500">+40</p>
          </div>
        </div>

        <!-- Stat 2 -->
        <div
          ref="stat2"
          class="transition-all duration-300 ease-out"
          :class="{
            'opacity-0 translate-y-10': !stat2Visible,
            'animate-fadeInUp': stat2Visible,
            'delay-200': true
          }"
        >
          <div class="bg-[#fdf3ee] p-6 text-center rounded-[15px] shadow-lg transition-transform duration-300 hover:-translate-y-[5px]">
            <div class="w-18 h-18 mt-0 ml-2 mb-4 bg-[rgb(25,135,84)] rounded-full flex items-center justify-center">
              <i class="text-3xl text-white fas fa-book"></i>
            </div>
            <h3 class="text-3xl font-bold text-[rgb(25,135,84)] mb-2 max-sm:!text-2xl">Nombre de cours</h3>
            <p class="text-4xl font-bold text-gray-500">+15</p>
          </div>
        </div>

        <!-- Stat 3 -->
        <div
          ref="stat3"
          class="transition-all duration-300 ease-out"
          :class="{
            'opacity-0 translate-y-10': !stat3Visible,
            'animate-fadeInUp': stat3Visible,
            'delay-300': true
          }"
        >
          <div class="bg-[#fdf3ee] p-6 text-center rounded-[15px] shadow-lg transition-transform duration-300 hover:-translate-y-[5px]">
            <div class="w-18 h-18 mt-0 ml-2 mb-4 bg-[rgb(255,193,7)] rounded-full flex items-center justify-center">
              <i class="text-3xl text-white fas fa-thumbs-up"></i>
            </div>
            <h3 class="text-3xl font-bold text-[rgb(255,193,7)] mb-2 max-sm:!text-2xl">Taux de satisfaction</h3>
            <p class="text-4xl font-bold text-gray-500">94%</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const element = ref(null);
const isVisible = ref(false);

const stat1 = ref(null);
const stat2 = ref(null);
const stat3 = ref(null);

const stat1Visible = ref(false);
const stat2Visible = ref(false);
const stat3Visible = ref(false);

const handleScroll = () => {
  if (!element.value) return;
  
  const rect = element.value.getBoundingClientRect();
  const isInView = (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
  
  if (isInView) {
    isVisible.value = true;
    setTimeout(() => {
      stat1Visible.value = true;
      setTimeout(() => {
        stat2Visible.value = true;
        setTimeout(() => {
          stat3Visible.value = true;
        }, 100);
      }, 100);
    }, 100);
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