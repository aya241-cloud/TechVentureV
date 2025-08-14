<template>
  <div class="relative w-full mb-12 overflow-hidden">
    <div class="relative h-[300px] w-full">
      <div class="absolute inset-x-0 top-0 h-[10px] bg-[url('@/assets/images/bg-header-top.png')] bg-repeat-x bg-center z-[1]"></div>

      <div class="absolute inset-x-0 bottom-0  h-[19px] bg-[url('@/assets/images/bg-header-bottom.png')] bg-repeat-x bg-center z-[1]"></div>
      <div class="w-full h-full max-sm:!w-96 max-sm:!h-75 bg-[url('../images/carousel-1.jpg')] px-[var(--bs-gutter-x,0.75rem)] mx-auto relative mb-12 py-12 bg-center bg-cover bg-no-repeat">
        <div class="container py-12 mx-auto">
          <h1 class="text-white text-7xl md:text-7xl relative left-20 font-bold max-sm:!text-5xl  max-sm:!relative max-sm:!left-[2px] max-sm:!top-[-10px]  animate-[slideInDown_1s] mb-8">{{ title }}</h1>
          <nav aria-label="breadcrumb" class="relative max-sm:!relative max-sm:!left-[5px] max-sm:!top-[-20px] left-20 animate-[slideInDown_1s]">
            <ol class="flex flex-wrap items-center gap-2 p-0 mb-4 list-none">
      <li class="breadcrumb-item">
        <a href="/" class="!text-[#FE5D37] max-sm:!font-bold max-sm:!text-lg no-underline hover:!text-[#cc4b2d]">
          Accueil
        </a>
      </li>
      <li class="breadcrumb-item text-white max-sm:!font-bold max-sm:!text-lg before:float-left before:pr-2 before:text-gray-300 before:content-['/']" aria-current="page">
        {{ currentPage }}
      </li>
    </ol>
            </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Define a prop named 'title'
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  currentPage: {
    type: String,
    default: "" // Default value
  }
});

const slides = [
  {
    image: '@/assets/images/carous2.webp',
    title: '"L\'endroit idéal pour préparer les leaders de demain"',
    description: '"Préparez vos enfants à l\'avenir. Robotique, Programmation IT, Design et Communications, tout en un seul endroit pour leur succès."',
  },
  {
    image: '@/assets/images/carous1.jpg',
    title: '"Offrez un avenir brillant à votre enfant dès aujourd\'hui"',
    description: '"Un parcours amusant où apprendre par la pratique devient un plaisir, sans jamais s\'ennuyer."',
  },
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