<template>
  <div class="circle-loader">
    <CircleLoader   class="transition duration-10"    full-screen v-if="isLoading" />
     <div v-else>
    <AppHeader />
    <BackToTop />
    <router-view />
    <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AppHeader from './components/layout/AppHeader.vue';
import BackToTop from './components/common/BackToTop.vue'
import AppFooter from './components/layout/AppFooter.vue';
import CircleLoader from './components/layout/CircleLoader.vue';


const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000); // Loader visible for 1 second
});


// Example async data loading function
async function fetchData() {
  try {
    isLoading.value = true;
    // await your API call here
    // const response = await api.getData()
  } finally {
    isLoading.value = false;
  }
}
</script>

<style>
/* Global styles can go here */
</style>