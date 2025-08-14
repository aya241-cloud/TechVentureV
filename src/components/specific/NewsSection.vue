<template>
  <div class=" max-sm:!relative max-sm:!bottom-[-1100px] ">
  <div 
    class="text-center mx-auto mb-15 max-w-[600px]  fadeInUp" 
    data-wow-delay="0.1s"
    :style="{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }"
  >
    <h1 class="mb-3 text-5xl text-[#071a1f] font-bold max-sm:!text-4xl">Actualités</h1>
    <p class="text-lg text-gray-600 max-sm:!text-base">Découvrez nos dernières actualités et événements.</p>
  </div>
  <!-- News Cards Container -->
  <div class="relative flex gap-5 mt-8 overflow-x-auto max-sm:!overflow-visible left-60 flex-nowrap scroll-snap-x">
    <!-- News Card 1 -->
    <div 
      class="w-[400px] h-[300px] flex-shrink-0 mb-10 max-sm:!relative max-sm:!right-60 relative rounded-xl overflow-hidden cursor-pointer max-sm:w-40 max-sm:h-50 transition-transform duration-300 hover:scale-105 shadow-md mx-2.5 snap-start"
      @click="openModal('modal1')"
    >
      <img 
        src="@/assets/images/LOGOTO.jpg" 
        alt="Journée de Lancement" 
        class="object-cover w-full h-full"
      >
      <div class="absolute text-3xl max-sm:!pb-20 max-sm:!text-xl bottom-0 font-['Lobster_Two'] font-bold w-full h-15 bg-blue-900/70 text-black text-center p-2.5 ">
        Journée d'Ouverture
      </div>
    </div>

    <!-- News Card 2 -->
    <div 
      class="w-[400px] h-[300px] max-sm:w-40 max-sm:h-50 max-sm:!relative max-sm:!right-60 flex-shrink-0 relative rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 shadow-md mx-2.5 scroll-snap-start"
      @click="openModal('modal2')"
    >
      <img 
        src="@/assets/images/LOGOTO.jpg" 
        alt="Présentation du club" 
        class="object-cover w-full h-full"
      >
      <div class="absolute bottom-0 max-sm:!pb-20 max-sm:!text-xl w-full font-['Lobster_Two'] font-bold h-15 bg-blue-900/70 text-black text-center p-2.5 text-3xl">
        Présentation du club
      </div>
    </div>
  </div>

  <!-- Modal 1 -->
  <div 
    v-show="activeModal === 'modal1'"
    class="fixed inset-0 z-[1000] flex items-center  justify-center bg-black/50"
    @click.self="closeModal('modal1')"
  >
    <div class="bg-white h-[550px] relative p-5 rounded-xl max-sm:!top-[-300px] max-sm:!w-90 max-sm:!relative max-sm:!justify-center max-sm:item-center max-sm:!left-[-138px] max-sm:!overflow-visible max-sm:!h-132 w-full max-w-[550px] text-center pt-5">
      <div class="mb-2">
        <span class="block mx-auto mb-2 text-2xl text-gray-500 cursor-pointer" @click="closeModal('modal1')">&times;</span>
        <h2 class="mb-8 text-4xl font-bold max-sm:!text-2xl">🎉 Journée de Lancement - TechVenture 🚀</h2>
      </div>
      <video 
        ref="video1"
        width="100%"  
        controls
        playsinline
        class="w-full h-64"
      >
        <source src="@/assets/videos/V1.mov" type="video/mp4">
      </video>
      <p class="mt-4 mb-5 text-gray-500 ">Merci à toutes les parents et leur enfants pour leur participation et à bientôt pour de nouvelles aventures ! 🥳❤️</p>
    </div>
  </div>

  <!-- Modal 2 -->
  <div 
    v-show="activeModal === 'modal2'"
    class="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50"
    @click.self="closeModal('modal2')"
  >
    <div class="bg-white h-[550px] relative p-5 rounded-xl max-sm:!top-[-300px] max-sm:!w-90 max-sm:!relative max-sm:!justify-center max-sm:item-center max-sm:!left-[-138px] max-sm:!overflow-visible max-sm:!h-130 w-full max-w-[550px] text-center pt-5">
      <div class="mb-2">
        <span class="block mx-auto mb-2 text-2xl text-gray-500 cursor-pointer" @click="closeModal('modal2')">&times;</span>
        <h2 class="mb-8 text-4xl font-bold">Présentation du club 🎓🤖</h2>
      </div>
      <video 
        ref="video2"
        width="100%" 
        height="200" 
        controls
        playsinline
        class="w-full"
      >
        <source src="@/assets/videos/V2.mp4" type="video/mp4">
      </video>
      <p class="mt-4 mb-5 text-gray-500">TechVenture est votre partenaire pour préparer vos enfants aux défis de demain en tant que leaders de demain. 🚀🌟👩‍💼👨‍💼</p>
    </div>
  </div>
  </div>
</template>

<script>
import { ref, nextTick } from 'vue';

export default {
  setup() {
    const activeModal = ref(null);
    const video1 = ref(null);
    const video2 = ref(null);

    const openModal = (id) => {
      activeModal.value = id;
      // Play video when modal opens
      nextTick(() => {
        if (id === 'modal1' && video1.value) {
          video1.value.play();
        } else if (id === 'modal2' && video2.value) {
          video2.value.play();
        }
      });
    };

    const closeModal = (id) => {
      activeModal.value = null;
      // Pause and reset video when modal closes
      if (id === 'modal1' && video1.value) {
        video1.value.pause();
        video1.value.currentTime = 0;
      } else if (id === 'modal2' && video2.value) {
        video2.value.pause();
        video2.value.currentTime = 0;
      }
    };

    return {
      activeModal,
      video1,
      video2,
      openModal,
      closeModal
    };
  }
};
</script>

<style>
/* Custom scroll snap behavior */
.scroll-snap-x {
  scroll-snap-type: x mandatory;
}

.scroll-snap-start {
  scroll-snap-align: start;
}

/* Responsive styles */
@media (max-width: 768px) {
  .news-card {
    width: 300px !important;
    height: 200px !important;
  }
  
  .modal {
    top: 120px !important;
    height: calc(100% - 120px) !important;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInUp {
  animation-name: fadeInUp;
}
</style>