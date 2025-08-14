<template>
  <div class="w-full max-sm:relative max-sm:!bottom-[-1100px] text-gray-400 pt-20 mt-0 bg-[#0a242b] text-white-50  fadeIn">
    <div class="w-full py-5 mx-auto px-30">
      <div class="flex flex-wrap -mx-[1.5rem] -mt-[1.5rem]">
        <div class="w-full md:w-6/12 lg:w-3/12 flex-none px-[15px] max-sm:!relative max-sm:!right-20">
          <h3 class="mb-4 text-3xl text-white max-sm:!text-2xl">Contactez-nous</h3>
          <p class="mb-2 max-sm:!w-80"><i class="fa fa-map-marker-alt me-3"></i>Immeuble Yasmine, Gabes</p>
          <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+216 93 909 416</p>
          <p class="mb-2 max-sm:!w-80"><i class="fa fa-envelope me-3"></i>Contact@Techventure.com</p>
          <div class="relative flex justify-center pt-6 max-sm:!relative max-sm:!left-10 right-3 ">
            <a class="btn-social mr-1.5 w-[45px] h-[45px] flex items-center hover:!bg-[#0a4ffd] max-sm:focus:!bg-[#0a4ffd] max-sm:focus:!border-4 max-sm:focus:!border-[#84a6fd]  focus:!border-4 focus:!border-[#84a6fd] justify-center text-white border border-white/50 rounded-full transition-all duration-300 hover:border-white hover:text-white" href="https://www.instagram.com/techventure_tunisia/"><i class="fab fa-instagram"></i></a>
            <a class="btn-social mr-1.5 w-[45px] h-[45px] flex items-center hover:!bg-[#0a4ffd] max-sm:focus:!bg-[#0a4ffd] max-sm:focus:!border-4 max-sm:focus:!border-[#84a6fd] focus:!border-4 focus:!border-[#84a6fd] justify-center text-white border border-white/50  rounded-full transition-all duration-300 hover:border-white hover:text-white" href="https://www.facebook.com/TechventureTn"><i class="fab fa-facebook-f"></i></a>
          </div>
        </div>
        <div class="flex-none w-full px-4 md:w-6/12 lg:w-3/12 max-sm:!mt-8 max-sm:!relative max-sm:!right-20">
    <h3 class="mb-4 text-3xl text-white max-sm:!text-2xl">Liens Rapides</h3>
    <a 
      v-for="(link, index) in quickLinks" 
      :key="index"
      :href="link.url"
      class="relative block mb-1 text-gray-400 transition-colors duration-300 footer-link hover:!text-[#0949e0] max-sm:focus:!text-[#0949e0] max-sm:focus:!text-[18px] hover:!text-[18px]" 
    >
      <i class="mr-1 fas fa-chevron-right"></i>
      {{ link.text }}
    </a>
  </div>
        <div class="w-full md:w-6/12 lg:w-3/12 flex-none px-[15px] max-sm:!mt-5 max-sm:!relative max-sm:!right-20">
          <h3 class="mb-4 text-3xl text-white max-sm:!text-2xl">Galerie Photo</h3>
          <div class="!pt-2 gap-2 flex flex-wrap max-sm:!left-[-12px] max-sm:!relative -mx-3 -my-0 max-sm:!grid max-sm:!grid-cols-3 max-sm:!gap-x-31">
            <div class="w-full max-sm:!w-29 md:flex-none md:w-20">
              <img class="!rounded-[10px] max-sm:!h-40 !h-26 !bg-[#FFF5F3] !p-1" src="@/assets/images/classes-1.jpg" alt="">
            </div>
            <div class="w-full max-sm:!w-29 md:flex-none md:w-20">
              <img class="!rounded-[10px] !h-26 max-sm:!h-40 !bg-[#FFF5F3] !p-1" src="@/assets/images/classes-2.jpg" alt="">
            </div>
            <div class="w-full max-sm:!w-29 md:flex-none md:w-20">
              <img class="!rounded-[10px] !h-26 max-sm:!h-40 !bg-[#FFF5F3] !p-1" src="@/assets/images/classes-3.jpg" alt="">
            </div>
            <div class="md:w-20 max-sm:!w-29 md:flex-none ">
              <img class="!rounded-[10px] !h-26 max-sm:!h-40 !bg-[#FFF5F3] !p-1" src="@/assets/images/classes-4.jpg" alt="">
            </div>
            <div class="w-full max-sm:!w-29 md:flex-none md:w-20">
              <img class="!rounded-[10px] !h-26 max-sm:!h-40 !bg-[#FFF5F3] !p-1" src="@/assets/images/classes-5.jpg" alt="">
            </div>
            <div class="w-full max-sm:!w-29 md:flex-none md:w-20">
              <img class="!rounded-[10px] !h-26 max-sm:!h-40 !bg-[#FFF5F3] !p-1" src="@/assets/images/classes-6.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-3/12 flex-none px-[15px] max-sm:!relative max-sm:!top-10 max-sm:!left-[-98px]">
          <h3 class="mb-4 text-3xl text-white">Newsletter</h3>
          <p class="text-[#74787C] font-semibold max-sm:!w-80 max-sm:!mb-5">Abonnez-vous pour plus de mises à jour</p>
          <div class="max-w-[400px] !mx-auto relative">
            <input
    class="block w-full !bg-transparent max-sm:!w-85 !border-[#74787C] !border-1 rounded-[10px] py-4 !px-[3rem] text-base font-normal !outline-none leading-normal text-[#74787C] transition-all duration-150 ease-in-out focus:!ring-[#f87051]/40 focus:!ring-4 focus:!ring-offset "
    type="text"
    placeholder="Votre email"
  />
            <button
    type="button"
    class="inline-block !absolute max-sm:!relative max-sm:!left-60 max-sm:!top-[-57px] !top-0 !right-0 !mt-2 !mr-2 font-medium text-white !bg-[#FE5D37] !border-[#FE5D37] hover:!bg-[#fc7455] rounded-[10px] py-2 px-3 text-base leading-normal text-center align-middle select-none cursor-pointer transition-all duration-500 ease-in-out hover:bg-[#FE5D37]/90 focus:!ring-2 focus:!ring-[#FE5D37]/50 focus:ring-offset-2"
  >S'inscrire</button>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-20 border-t border-gray-500">
  <div class="py-[25px] text-[15px]">
    <div class="flex flex-wrap -mx-3">
      <div class="w-full px-3 mb-4 text-center md:text-left md:mb-0 md:w-1/2 md:flex-none">
        &copy; 2025 Copyright | TechVenture.
      </div>
      <div class="w-full px-3 text-center md:w-1/2 md:flex-none md:text-right">
        <div class="inline-flex items-center">
          <a
            v-for="(link, idx) in footerLinks"
            :key="link.text"
            :href="link.to"
            :class="[
              idx === 0 ? 'max-sm:focus:!text-[#0949e0] focus:!text-[#0949e0] mr-[15px] pr-[15px] text-white border-r border-r-white/10' : 'pl-[15px] text-white'
            ]"
          >
            {{ link.text }}
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
  name: 'QuickLinks',
  data() {
    return {
      quickLinks: [
        { text: 'À Propos', url: '/about' },
        { text: 'Programme', url: '/classes' },
        { text: 'Contactez-nous', url: '/contact' }
      ],
      footerLinks: [
        { text: 'Accueil', to: '/' },
        { text: 'FAQ', to: '/FAQSection' }
      ]
    }
  }
}
</script>

<style>
/* Add any footer-specific styles here */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-in-out;
  animation-delay: 0.1s;
}
</style>