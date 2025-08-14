<template>
  <div class="relative w-full mb-12 overflow-hidden">
    <!-- Carousel -->
    <div class="relative h-[800px] max-sm:h-[500px] w-full">
      <!-- Top header decoration -->
      <div class="absolute inset-x-0 max-sm:!inset-x-0 top-0 h-[10px] max-sm:!h-3 max-sm:!top-[-1px] bg-[url('@/assets/images/bg-header-top.png')] bg-repeat-x bg-center z-[1]"></div>
      <!-- Bottom header decoration - added this part -->
      <div class="absolute inset-x-0 bottom-0 h-[19px] bg-[url('@/assets/images/bg-header-bottom.png')] bg-repeat-x bg-center z-[1]"></div>
      
      <div v-show="currentSlide === 0" class="absolute inset-0 transition-opacity duration-500">
        <img src="@/assets/images/carous2.png" alt="Kids learning technology" class="object-cover w-full h-full">
        <div class="absolute inset-0 flex items-center bg-black/20">
          <div class="container relative px-4 left-23 top-8">
            <div class="flex-none w-7/12 max-w-4xl max-sm:!w-80 max-sm:left-[-100px] max-sm:bottom-3 max-sm:relative">
              <h1 class="mb-6 font-bold text-white max-sm:!text-3xl text-7xl md:text-7xl lg:text-7xl animate-fade-in-down">
                "L'endroit idéal pour préparer les leaders de demain"
              </h1>
              <p class="max-w-3xl mb-8 text-lg text-white max-sm:!text-base md:text-xl">
                "Préparez vos enfants à l'avenir. Robotique, Programmation IT, Design et Communications, tout en un seul endroit pour leur succès."
              </p>
            
            </div>
          </div>
        </div>
      </div>
      <div v-show="currentSlide === 1" class="absolute inset-0 transition-opacity duration-500">
        <img src="@/assets/images/carous1.jpg" alt="Happy children learning" class="object-cover w-full h-full">
        <div class="absolute inset-0 flex items-center bg-black/20">
          <div class="relative block w-7/12 px-4 left-18 bottom-1">
            <div class="max-w-4xl max-sm:!w-80 max-sm:left-[-75px] max-sm:!top-2 max-sm:relative">
              <h1 class="mb-6 font-bold leading-none text-white max-sm:!text-3xl lg:leading-tight text-7xl md:text-7xl lg:text-7xl animate-fade-in-down">
    "Offrez un avenir brillant à votre enfant dès aujourd'hui"
</h1>
              <p class="max-w-3xl mb-8 text-lg text-white max-sm:!text-base md:text-xl">
                "Un parcours amusant où apprendre par la pratique devient un plaisir, sans jamais s'ennuyer."
              </p>
              <div class="flex flex-wrap gap-4 max-sm:!flex-nowrap max-sm:!gap-2">
                <a href="/about" class="max-sm:!text-base max-sm:!px-5 max-sm:!py-2 px-14 py-4.5 font-medium bg-[#FE5D37] hover:bg-[#ff6c4b] boreder-[#FE5D37] text-white transition duration-300 rounded-full focus:!ring-[#f87051]/90 focus:max-sm:!ring-[#f87051]/80 focus:!ring-4 focus:!ring-offset">
                  En savoir plus
                </a>
                <a href="/classes" class="max-sm:!text-base max-sm:!px-5 max-sm:!py-2.5 px-14 py-4.5 font-medium text-white transition duration-300 bg-gray-800 rounded-full hover:bg-gray-900 focus:!ring-[#103741]/50 focus:!ring-4 focus:!ring-offset">
                  Nos Classes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Navigation Arrows -->
    <div class="absolute top-115 right-[6%] transform -translate-y-1/2 flex flex-col z-20 max-sm:relative max-sm:!top-[60%]">
      <button @click="prevSlide" class="owl-prev my-1.5 w-11 h-11 flex items-center justify-center text-white bg-transparent border border-white rounded-full text-xl transition-all duration-500 hover:bg-white hover:bg-opacity-70" >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button @click="nextSlide" class="owl-next my-1.5 w-11 h-11 flex items-center justify-center text-white bg-transparent border border-white rounded-full text-xl transition-all duration-500 hover:bg-white hover:bg-opacity-70">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Indicators -->
    <div class="absolute z-10 flex h-full space-x-2 -translate-x-1/2 bottom-8 left-1/2">
      <button 
        v-for="(slide, index) in slides" 
        :key="index"
        @click="goToSlide(index)"
        class="hidden h-3 transition-all duration-300 rounded-full"
        :class="{
          'w-6 bg-white': currentSlide === index,
          'w-3 bg-white/50': currentSlide !== index
        }"
        aria-label="Go to slide"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const slides = [
  {
    image: '@/assets/images/carous2.webp',
    title: '"L\'endroit idéal pour préparer les leaders de demain"',
    description: '"Préparez vos enfants à l\'avenir. Robotique, Programmation IT, Design et Communications, tout en un seul endroit pour leur succès."'
  },
  {
    image: '@/assets/images/carous1.jpg',
    title: '"Offrez un avenir brillant à votre enfant dès aujourd\'hui"',
    description: '"Un parcours amusant où apprendre par la pratique devient un plaisir, sans jamais s\'ennuyer."'
  }
];

const currentSlide = ref(0);
let interval;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
  resetInterval();
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
  resetInterval();
};

const goToSlide = (index) => {
  currentSlide.value = index;
  resetInterval();
};

const startInterval = () => {
  interval = setInterval(nextSlide, 5000);
};

const resetInterval = () => {
  clearInterval(interval);
  startInterval();
};

onMounted(() => {
  startInterval();
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style scoped>
/* Animation */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out forwards;
}

/* Mobile styles */
@media (max-width: 768px) {
  .header-carousel .relative {
    min-height: 500px;
  }
  
  .header-carousel img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .header-carousel p {
    font-size: 1rem !important;
    font-weight: 400 !important;
  }

  .header-carousel h1 {
    font-size: 1.875rem;
    font-weight: 600;
  }
}
</style>