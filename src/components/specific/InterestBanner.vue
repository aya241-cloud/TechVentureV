<template>
  <div v-if="showBanner" class="fixed z-50 w-[70%] max-sm:!fixed max-sm:!top-290 max-sm:!h-20 max-sm:!left-90 max-sm:!z-50 max-sm:!w-80 max-w-[400px] p-[0.6rem_1rem] text-center text-white transform -translate-x-1/2 bg-[#deaa0e] rounded-lg shadow-md left-220 bottom-5 animate-slide-up flex-col gap-1.5">
    <p class="m-0 text-base font-bold text-white font-['Comic_Sans_MS',sans-serif]">Are you interested in joining us?</p>
    <div class="flex justify-center gap-4 pt-1.5">
      <button @click="handleResponse('yes')" class="px-4 py-2 text-sm font-bold text-white bg-green-600 border-none rounded-full cursor-pointer max-sm:focus:!bg-green-700 hover:bg-green-700">
        Yes
      </button>
      <button @click="handleResponse('no')" class="px-4 py-2 text-sm font-bold text-white bg-red-600 border-none rounded-full cursor-pointer max-sm:focus:!bg-red-700 hover:bg-red-700 ">
        No
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const showBanner = ref(true)

const handleResponse = async (answer) => {
  try {
    const response = await fetch('track_response.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `response=${answer}`,
    })
    showBanner.value = false
  } catch (error) {
    console.error('Error:', error)
    showBanner.value = false
  }
}
</script>

<style scoped>
@keyframes slide-up {
  0% {
    transform: translate(-50%, 100%);
  }
  100% {
    transform: translate(-50%, 0);
  }
}

.animate-slide-up {
  animation: slide-up 1.5s ease-out;
}
</style>