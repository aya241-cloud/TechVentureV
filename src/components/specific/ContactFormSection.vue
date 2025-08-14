<template>
  <div class="container px-4 py-20 mx-auto">
    <div class="mx-auto max-w-7xl">
      <div class="rounded-lg shadow bg-[#FFF5F3]">
        <div class="flex flex-col lg:flex-row">
          <!-- Contact Form Section -->
          <div class="w-full p-8 lg:w-1/2 animate-fadeIn" style="animation-delay: 0.1s">
            <div class="flex flex-col justify-center h-full">
              <h1 class="mb-6 text-5xl max-sm:!text-4xl font-bold text-[#0e2f38]">Contactez-Nous</h1>
              
              <form @submit.prevent="submitForm" class="space-y-4">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <!-- Parent Name -->
                  <div class="relative focus:!text-sm">
                    <input 
    type="text" 
    id="gname" 
    v-model="formData.parentName"
    class="w-full px-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-4 focus:!ring-[#ffae9b]/50 peer" 
    placeholder=" "
    required
/>
<label 
    for="gname" 
    class="absolute text-gray-500 transition-all duration-200 pointer-events-none left-4 top-3 peer-focus:!text-xs peer-focus:!text-gray-400 peer-focus:!top-1 peer-not-placeholder-shown:!top-0.5 peer-not-placeholder-shown:!text-xs peer-not-placeholder-shown:!text-gray-400"
>
    Nom de parent
</label>
                  </div>
                  
                  <!-- Parent Phone -->
                  <div class="relative">
                    <input 
                      type="tel" 
                      id="phone" 
                      v-model="formData.parentPhone"
                      class="w-full px-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-4 focus:!ring-[#ffae9b]/50 peer" 
                      placeholder=" "
                      required
                    />
                    <label 
                      for="phone" 
                      class="absolute text-gray-500 transition-all duration-200 pointer-events-none left-4 top-3 peer-focus:!text-xs peer-focus:!text-gray-400 peer-focus:!top-1 peer-not-placeholder-shown:!top-0.5 peer-not-placeholder-shown:!text-xs peer-not-placeholder-shown:!text-gray-400"
                    >
                      Numéro de téléphone de parent
                    </label>
                  </div>
                </div>
                
                <!-- Parent Email -->
                <div class="relative">
                  <input 
                    type="email" 
                    id="gmail" 
                    v-model="formData.parentEmail"
                    class="w-full px-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-4 focus:!ring-[#ffae9b]/50 peer" 
                    placeholder=" "
                    required
                  />
                  <label 
                    for="gmail" 
                    class="absolute text-gray-500 transition-all duration-200 pointer-events-none left-4 top-3 peer-focus:!text-xs peer-focus:!text-gray-400 peer-focus:!top-1 peer-not-placeholder-shown:!top-0.5 peer-not-placeholder-shown:!text-xs peer-not-placeholder-shown:!text-gray-400"
                  >
                    E-mail de parent
                  </label>
                </div>
                
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <!-- Child Name -->
                  <div class="relative">
                    <input 
                      type="text" 
                      id="cname" 
                      v-model="formData.childName"
                      class="w-full px-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-4 focus:!ring-[#ffae9b]/50 peer" 
                      placeholder=" "
                      required
                    />
                    <label 
                      for="cname" 
                      class="absolute text-gray-500 transition-all duration-200 pointer-events-none left-4 top-3 peer-focus:!text-xs peer-focus:!text-gray-400 peer-focus:!top-1 peer-not-placeholder-shown:!top-0.5 peer-not-placeholder-shown:!text-xs peer-not-placeholder-shown:!text-gray-400"
                    >
                      Nom de l'enfant
                    </label>
                  </div>
                  
                  <!-- Child Age -->
                  <div class="relative">
                    <input 
                      type="number" 
                      id="cage" 
                      v-model="formData.childAge"
                      class="w-full px-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-4 focus:!ring-[#ffae9b]/50 peer" 
                      placeholder=" "
                      min="1" 
                      max="120"
                      required
                    />
                    <label 
                      for="cage" 
                      class="absolute text-gray-500 transition-all duration-200 pointer-events-none left-4 top-3 peer-focus:!text-xs peer-focus:!text-gray-400 peer-focus:!top-1 peer-not-placeholder-shown:!top-0.5 peer-not-placeholder-shown:!text-xs peer-not-placeholder-shown:!text-gray-400"
                    >
                      Age de l'enfant
                    </label>
                  </div>
                </div>
                
                <!-- Message -->
                <div class="relative">
                  <textarea 
                    id="message" 
                    v-model="formData.message"
                    class="w-full px-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-4 focus:!ring-[#ffae9b]/50 peer" 
                    placeholder=" "
                    required
                  ></textarea>
                  <label 
                    for="message" 
                    class="absolute text-gray-500 transition-all duration-200 pointer-events-none left-4 top-3 peer-focus:!text-xs peer-focus:!text-gray-400 peer-focus:!top-1 peer-not-placeholder-shown:!top-0.5 peer-not-placeholder-shown:!text-xs peer-not-placeholder-shown:!text-gray-400"
                  >
                    Votre Message
                  </label>
                </div>
                
                <!-- Submit Button -->
                <button 
                  type="submit" 
                  class="w-full px-4 py-3 font-medium text-white transition duration-200 !bg-[#FE5D37] rounded-lg hover:bg-[#ff7556]"
                >
                  Envoyer
                </button>
              </form>
              
              <!-- Success Message -->
              <div 
                v-if="showSuccess" 
                class="p-4 mt-4 text-green-700 bg-green-100 rounded-lg"
              >
                Message reçu. Merci !
              </div>
            </div>
          </div>
          
          <!-- Image Section -->
          <div class="w-full lg:w-1/2 animate-fadeIn" style="animation-delay: 0.5s; min-height: 400px">
            <div class="relative w-full h-full">
              <img 
                class="absolute max-sm:!relative max-sm:!h-95 max-sm:!left-[-12px] inset-0 object-cover w-full h-full rounded-r-lg" 
                src="@/assets/images/LOGOTO-1.png" 
                alt="Contact illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  parentName: '',
  parentPhone: '',
  parentEmail: '',
  childName: '',
  childAge: '',
  message: ''
});

const showSuccess = ref(false);
const showLoading = ref(false);
const showError = ref(false);
const serverMessage = ref(''); // A ref to store the message from the server

const submitForm = async () => {
  showLoading.value = true;
  showError.value = false;
  showSuccess.value = false;
  serverMessage.value = '';

  const formToSend = new FormData();
  for (const key in formData.value) {
    formToSend.append(key, formData.value[key]);
  }

  try {
    const response = await fetch('/api/submit_form.php', {
      method: 'POST',
      body: formToSend,
    });

    // We expect a JSON response from the PHP file
    const result = await response.json(); 

    if (response.ok && result.success) {
      showSuccess.value = true;
      serverMessage.value = result.message;
      
      // Reset form data and success message after a delay
      setTimeout(() => {
        formData.value = {
          parentName: '',
          parentPhone: '',
          parentEmail: '',
          childName: '',
          childAge: '',
          message: ''
        };
        showSuccess.value = false;
        serverMessage.value = '';
      }, 5000);
    } else {
      // Handle the error message from the PHP file
      showError.value = true;
      serverMessage.value = result.message || 'An unexpected error occurred.';
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    showError.value = true;
    serverMessage.value = 'A network error occurred. Please check your connection.';
  } finally {
    showLoading.value = false;
  }
};

</script>
<style scoped>
/* Animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>