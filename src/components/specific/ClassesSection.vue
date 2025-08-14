<template>
  <!-- Courses Section -->
  <div class="py-12 bg-white">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <!-- Heading Section -->
      <div 
        ref="heading"
        class="max-w-2xl mx-auto mb-12 text-center"
        :class="{
          'opacity-0 translate-y-30': !headingVisible,
          'animate-fade-in-up': headingVisible
        }"
      >
        <h1 class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Nos Cours</h1>
        <p class="text-lg text-gray-600">
          "Nous enseignons des cours divers et tendances afin d'améliorer vos leaders, tant en soft skills qu'en hard skills."
        </p>
      </div>

      <!-- Courses Grid -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="(course, index) in courses" 
          :key="index"
          class="w-full transition-all duration-500 hover:-mt-2.5"
          :class="{
            'opacity-0 translate-y-30': !coursesVisible[index],
            'animate-fade-in-up': coursesVisible[index],
            'delay-100': index % 2 === 0,
            'delay-200': index % 2 !== 0
          }"
        >
            <!-- Course Image -->
            <div class="bg-[#FFF5F3] rounded-full w-3/4 mx-auto p-4 -mb-8 relative z-10">
              <img 
                class="object-cover w-full h-full transition-transform duration-300 rounded-full"
                :class="{'scale-105': hoveredCourse === index}"
                :src="getImageUrl(course.image)" 
                :alt="course.title"
              >
            </div>
            <!-- Course Content -->
            <div class="bg-[#FFF5F3] rounded-lg p-6 pt-12 -mt-8" :class="{'scale-105': hoveredCourse === index}">
              <h3 class="text-3xl font-semibold text-center text-[#103741] mb-8 hover:text-[#bd3c1f] transition-colors cursor-pointer">
                {{ course.title }}
              </h3>
              
              <div class="grid grid-cols-3 gap-2 mt-6">
                <!-- Age Group -->
                <div class="border-t-4 !border-[#FE5D37]  pt-2">
                  <h6 class="text-[#FE5D37] text-lg font-bold mb-1">Age:</h6>
                  <p class="text-[15px] text-gray-600">
                    <span>8-12 Ans</span><br>
                    <span>13-16 Ans</span>
                  </p>
                </div>
                
                <!-- Duration -->
                <div class="border-t-4 !border-[#198754] pt-2">
                  <h6 class="text-[#198754] text-lg font-bold mb-1">Durée:</h6>
                  <p class="text-[15px] text-gray-600">3 Heures</p>
                </div>
                
                <!-- Capacity -->
                <div class="border-t-4 !border-[#ffc107] pt-2">
                  <h6 class="text-[#ffc107] text-lg font-bold mb-1">Capacité:</h6>
                  <p class="text-[15px] text-gray-600">8-12 Enfants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Import images directly
import c1 from '@/assets/images/c1.jpg';
import c2 from '@/assets/images/C2.jpg';
import c3 from '@/assets/images/c3.jpg';
import c4 from '@/assets/images/c4.jpg';
import c5 from '@/assets/images/c5.avif';

const courses = [
  {
    title: 'Programmation & IT',
    image: c1
  },
  {
    title: 'Design / Graphique',
    image: c2
  },
  {
    title: 'Soft Skills',
    image: c3
  },
  {
    title: 'Robotique',
    image: c4
  },
  {
    title: 'Intelligence Artificielle',
    image: c5
  }
];

// Helper function for dynamic image URLs (if needed)
const getImageUrl = (image) => {
  return image;
};

const heading = ref(null);
const headingVisible = ref(false);
const coursesVisible = ref(Array(courses.length).fill(false));
const hoveredCourse = ref(null);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.target === heading.value && entry.isIntersecting) {
      headingVisible.value = true;
      
      // Animate courses sequentially
      coursesVisible.value.forEach((_, index) => {
        setTimeout(() => {
          coursesVisible.value[index] = true;
        }, 100 * index);
      });
    }
  });
}, { threshold: 0.1 });

onMounted(() => {
  if (heading.value) observer.observe(heading.value);
});
</script>

<style>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.delay-100 {
  animation-delay: 100ms;
}

.delay-200 {
  animation-delay: 200ms;
}
</style>