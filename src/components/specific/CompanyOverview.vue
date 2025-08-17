<template>
  <!-- Company Overview Start -->
  <div class="py-12 container-xxl">
    <div class="container px-4 mx-auto">
      <div class="flex flex-col items-center gap-8 lg:flex-row">
        <!-- Text Content -->
        <div ref="textContent" class="transition-all max-sm:!mr-15 max-sm:!w-full duration-500 ease-out relative w-[40%] space-y-5 left-10" :class="{
            'opacity-0 translate-y-30': !textVisible,
            'animate-fadeInUp': textVisible
          }">
          <h1 class="relative mb-6 text-5xl font-bold text-gray-800 max-sm:!text-4xl max-sm:!w-99 max-sm:!relative max-sm:!left-[-20px] md:text-5xl">"À propos de notre équipe"</h1>
          <p class="text-gray-600">"Nous sommes une institution dédiée à l'éducation de la prochaine génération de leaders. Notre équipe
            est composée d'experts pédagogiques qui assurent une interaction fluide entre les systèmes éducatifs
            français et tunisien, garantissant ainsi une formation adaptée à chaque élève."</p>

          <div class="space-y-4">
            <div>
              <h3 class="flex items-center mt-6 text-3xl max-sm:!text-2xl font-semibold text-[#272f3b]">
                <i class="mr-2 text-[#272f3b] text-3xl max-sm:!text-2xl fas fa-chalkboard-teacher"></i>
                Expert Pédagogique
              </h3>
              <p class="mt-2 text-gray-600">"Nous disposons d'experts pédagogiques qui veillent à ce que l'apprentissage soit à la fois
                enrichissant et interactif. Ils garantissent une approche adaptée aux besoins spécifiques de chaque
                élève."</p>
            </div>

            <div>
              <h3 class="flex items-center mt-6 max-sm:!text-2xl text-3xl text-[#272f3b] font-semibold">
                <i class="mr-2 text-[#272f3b] max-sm:!text-2xl text-3xl fas fa-user-md"></i>
                Soutien Psychologique
              </h3>
              <p class="mt-2 text-gray-600">"Pour veiller au bien-être de nos enfants, nous avons un psychiatre disponible pour intervenir en cas
                de besoin, s'assurant que tous les élèves bénéficient d'un environnement sain et sécurisant."</p>
            </div>

            <div>
              <h3 class="flex items-center mt-6 max-sm:!text-2xl text-3xl text-[#272f3b] font-semibold">
                <i class="mr-2 text-[#272f3b] max-sm:!text-2xl text-3xl fas fa-users"></i>
                Équipe Enseignante Qualifiée
              </h3>
              <p class="mt-2 text-gray-600">"Notre équipe d'enseignants qualifiés supervise régulièrement vos enfants, car nous croyons en
                l'importance de la
                communication entre l'école et la maison pour leur succès."</p>
            </div>

            <p class="text-gray-600">"Nous intégrons l'innovation éducative avec des équipements de pointe en robotique et en Python,
              préparant ainsi les
              enfants à exceller dans un monde numérique et l'avenir de l'IA."</p>

            <p class="text-gray-600">"Nous visons à créer un environnement inclusif où chaque enfant développe sa créativité et ses
              compétences pour
              devenir des entrepreneurs et des leaders de demain."</p>
          </div>
        </div>
        <!-- Image Content -->
        <div ref="imageGallery" class="w-full max-sm:!w-95 lg:w-1/2" :class="{
              'opacity-0 translate-y-30': !galleryVisible,
              'animate-fadeInUp': galleryVisible,
              'delay-300': true
            }"
        >
          <div @click="isActive=!isActive" class="flex justify-center">
            <img  :class="['w-3/4 p-6 hover:!bg-[#1852d9] bg-gray-100 rounded-full shadow-lg', isActive? 'max-sm:!bg-[#1852d9]':'']" src="@/assets/images/b1.jpg" alt="Company Overview">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Company Overview End -->
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const textContent = ref(null);
const imageGallery = ref(null);


const textVisible = ref(false);
const galleryVisible = ref(false);
const isActive=ref(false);

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