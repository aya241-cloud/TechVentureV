<template>
  <header class="w-full header-carousel max-sm:!sticky max-sm:!z-100 sticky z-100 transition-all duration-300 flex flex-nowrap justify-start  bg-white 
            before:absolute before:content-[''] before:w-full before:h-[10px] before:top-0 before:left-0 
            before:bg-[url('@/assets/images/bg-header-top.png')] before:bg-center before:bg-repeat-x before:z-10
            after:absolute after:content-[''] after:w-full after:h-[19px] after:bottom-0 after:left-0 
            after:bg-[url('@/assets/images/bg-header-bottom.png')] after:bg-center after:bg-repeat-x after:z-10"
        :class="{
  'top-0 max-sm:!top-0': showHeader,
  '-top-[100px] max-sm:!-top-[100px]': !showHeader,
  'max-sm:!h-90 max-sm:!relative': isExpanded,
  'max-sm:!h-23 max-sm:!sticky max-sm:!z-50': !isExpanded
}">
    <nav class="flex items-center justify-between w-full max-sm:!pl-6  px-5 py-0.5 max-sm:!py-2 max-sm:!pb-3  relative top-[2px]">
      <a href="/" class="flex items-center ">
        <img 
          src="@/assets/images/logo.png" 
          alt="TechVenture Logo" 
          :class="['w-71.5 lg:h-[50px] mt-0.25 lg:ml-7', isExpanded? 'max-sm:!fixed max-sm:!w-40 max-sm:!top-[10px] max-sm:!z-100 ':'max-sm:!fixed max-sm:!w-40']" >
      </a>
      <button  @click="isExpanded=!isExpanded" :class="['text-gray-800 focus:ring-gray-500  focus:ring-4 lg:hidden  relative left-75 px-2 py-1 rounded-[10px] border-gray-200 border flex items-center',isExpanded? 'max-sm:!relative max-sm:!top-[-145px] max-sm:!left-73':'max-sm:!fixed']" :aria-expanded="isExpanded" >
        <svg class="w-8 h-8" fill="none" stroke="#6b7280" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <div class="flex px-0 mr-6 font-medium font-heebo">
        <div class="relative max-sm:!top-0 items-center hidden right-5 md:flex" >
          <a 
            v-for="link in navLinks" 
            :key="link.name"
            :href="link.href" 
            :class="[
              'text-gray-800 px-4 text-[16px] transition-colors hover:text-blue-600 focus:text-blue-600 active:text-blue-600',
              $route.path === link.href ? 'text-blue-600' : ''
            ]"
          >
            {{ link.name }}
          </a>
        </div>

        <div class="ml-45">
          <a 
            href="/form"
            class="px-5 py-2 md:text-white md:transition-colors duration-300 bg-[#FE5D37] border-[#FE5D37] rounded-[1000px] outline-none focus:!border-4 focus:!border-[#f8a28e] hover:bg-[#ff6c4b] hover:border-[#FE5D37] hidden sm:inline-block"
          >
            Join Us<i class="ml-3 fa fa-arrow-right"></i>
          </a>
        </div>
      </div>
       <transition name="dropdown" :duration="0">
      <div v-if="isExpanded" :class="['absolute  left-0 right-0 px-4 py-4 top-15 md:hidden',isExpanded? 'max-sm:!bg-transparent max-sm:!top-[15px] max-sm:!left-[-270px] max-sm:!z-0 max-sm:!relative':'']" >
        <div class=" mx-1 my-6 !w-80 border-t border-gray-300"></div>
        <a 
            v-for="link in navLinks" 
            :key="link.name"
            :href="link.href" 
            :class="[
              'block py-2 !text-lg  text-gray-900 hover:text-blue-600',
              $route.path === link.href ? 'text-blue-600' : ''
            ]"
          >
            {{ link.name }}
          </a>
        <a href="/form" class="block w-30 px-4 py-2 mt-4 text-center text-white transition duration-300 bg-[#FE5D37] border-[#FE5D37] rounded-[1000px] outline-none focus:!border-4 focus:!border-[#ffa18c] hover:bg-[#ff6c4b] hover:border-[#FE5D37]">
          Join Us<i class="ml-3 fa fa-arrow-right"></i>
        </a>
      </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, vShow } from 'vue';
import { useRoute } from 'vue-router';

const $route = useRoute();
const isExpanded = ref(false);
const showHeader = ref(true);
const lastScrollPosition = ref(0);

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'A Propos', href: '/about' },
  { name: 'Programme', href: '/classes' },
  { name: 'Contactez-Nous', href: '/contact' }
];

// Handle scroll behavior
let scrollTimeout;
const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  // At top of page - always show header
  if (currentScrollPosition <= 0) {
    showHeader.value = true;
    return;
  }
// Scrolling down (desktop/tablet)
  if (currentScrollPosition <= 200) {
    showHeader.value = false;
    // Show header after 1 second regardless of continuing to scroll
    scrollTimeout = setTimeout(() => {
      showHeader.value = true;
    }, 1000);
  } 
  // Mobile-specific scroll logic
  if (isMobile) {
    if (currentScrollPosition <= 100) {
      showHeader.value = false;
    } else {
      showHeader.value = true;
    }
  }

  
  lastScrollPosition.value = currentScrollPosition;
};
  

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  clearTimeout(scrollTimeout);
});
</script>

<style>
/* Heebo font family */
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&display=swap');

header {
  font-family: 'Heebo', sans-serif;
}
.dropdown-enter-active, .dropdown-leave-active {
  transition: all 0.5s ease-in-out;
  transform-origin: top;
}
.dropdown-enter-from, .dropdown-leave-to {
  opacity: 1;
  transform: scaleY(0.7);
}
</style>