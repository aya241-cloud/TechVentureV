<template>
  <section class="py-12 bg-white max-sm:!relative max-sm:!top-[-50px]">
    <div class="px-4 mx-auto max-w-7xl">
      <!-- Heading Section -->
      <div class="max-w-2xl mx-auto mb-16 text-center animate-fadeInUp animate-delay-100">
        <h1 class="mb-4 text-4xl font-bold md:text-5xl text-[#103741]">Entrons en contact</h1>
        <p class="text-lg text-gray-600">"Vous pouvez soit venir à notre bureau, soit nous contacter par téléphone."</p>
      </div>
      
      <!-- Contact Info Grid -->
      <div class="grid gap-8 mb-16 max-sm:!gap-4 md:grid-cols-3">
        <!-- Address -->
        <div class="p-6 text-center transition-all duration-300 animate-fadeInUp animate-delay-100">
          <div class="inline-flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-primary-50">
            <i class="text-3xl text-primary fas fa-map-marker-alt"></i>
          </div>
          <h6 class="text-[#103741]">
            Avenue Abou ElKacem Echebbi<br />
            Immeuble Yasmine 1er étage<br />
            Gabes<br />
            6011
          </h6>
        </div>
        
        <!-- Email -->
        <div class="p-6 text-center transition-all duration-300 animate-fadeInUp animate-delay-300">
          <div class="inline-flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-primary-50">
            <i class="text-3xl text-primary fas fa-envelope-open"></i>
          </div>
          <div class="space-y-2">
            <a href="mailto:Contact@Techventure.tn" class="block font-medium transition-colors text-[#103741] hover:text-primary-600">
              Click to Send <i class="ml-1 fas fa-envelope-open"></i>
            </a>
            <a href="mailto:Contact@Techventure.com" class="text-[#103741] transition-colors hover:text-primary">
              Contact@Techventure.com
            </a>
          </div>
        </div>
        
        <!-- Phone -->
        <div class="p-6 text-center transition-all duration-300 animate-fadeInUp animate-delay-500">
          <div class="inline-flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full bg-primary-50">
            <i class="text-3xl text-primary fas fa-phone-alt"></i>
          </div>
          <div class="space-y-2">
            <a href="https://wa.me/21693909416" target="_blank" class="block font-medium transition-colors text-[#103741] hover:text-primary-600">
              Click to Call <i class="ml-1 fab fa-whatsapp"></i>
            </a>
            <a href="https://wa.me/21693909416" target="_blank" class="text-[#103741] transition-colors hover:text-primary">
              +216 93 909 416
            </a>
          </div>
        </div>
      </div>
      
      <!-- Map Section -->
      <div class="overflow-hidden rounded-lg shadow-lg ">
        <div class="relative aspect-video max-sm:!h-170">
          <iframe 
            class="absolute inset-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.765943776354!2d10.102699315591106!3d33.88123717475944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13c5a97c6d350b6d%3A0x3b7178e44566a080!2sBoosteno%2C%20Gabes%2C%20Tunisia!5e0!3m2!1sen!2sus!4v1678675682076!5m2!1sen!2sus"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Using Composition API
defineOptions({
  name: 'ContactSection'
})
</script>

<style>
/* Custom primary color */
.text-primary {
  color: #FE5D37;
}
.bg-primary-50 {
  background-color: #FFF5F3;
}
.hover\:text-primary-600:hover {
  color: #2563eb;
}

/* Animation styles */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 1s ease-out forwards;
  visibility: visible !important;
}

.animate-delay-100 {
  animation-delay: 0.1s;
}

.animate-delay-300 {
  animation-delay: 0.3s;
}

.animate-delay-500 {
  animation-delay: 0.5s;
}
</style>