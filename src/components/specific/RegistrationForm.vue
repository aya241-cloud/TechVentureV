<template>
  <div class="container px-4 py-5 mx-auto">
    <div class="mx-auto text-center mb-15 animate-fadeInUp" style="max-width: 600px;">
      <h1 class="mb-5 text-5xl font-bold max-sm:!text-3xl text-[#0d2930]">Formulaire d'Inscription</h1>
      <p class="text-gray-600">
        🚀 "Nous vous attendons pour rejoindre l'aventure !" 🌟
      </p>
    </div>
    <div class="iframe-container">
      <iframe 
        class="iframe w-full h-[500px] border-none"
        src="https://docs.google.com/forms/d/e/1FAIpQLSeCAAN7tt1AO5OgvsnsPQ4iBLyPCbtNca-ElnoiE8L0x8DJFw/viewform"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</template>

<script setup>
// No script logic is needed for this simple component.
</script>

<style scoped>
/* You can add custom styles here if needed, but Tailwind is handling it. */
.animate-fadeInUp {
  animation: fadeInUp 1s ease-in-out;
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>