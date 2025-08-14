<template>
  <section class="py-16">
    <div class="container px-4 mx-auto">
      <div
        ref="element"
        class="transition-all duration-300 ease-out"
        :class="[
          isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-20',
          'will-change-transform'
        ]"
      >
        <div class="visible max-w-2xl mx-auto mb-12 text-center">
          <h2 class="mb-4 text-5xl font-bold text-gray-800 max-sm:!text-3xl">Nos Formations</h2>
          <p class="text-gray-600 max-sm:!text-base">
            Des formations divers et complémentaires, encadrés par notre équipe pédagogique, garantissent une expérience d'apprentissage enrichissante et équilibrée.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 max-sm:relative md:grid-cols-2 lg:grid-cols-4 h-[400px]">
        <!-- Programmation Card -->
        <div
          ref="card1"
          class="transition-all duration-300 ease-out"
          :class="{
            'opacity-0 translate-y-10': !card1Visible,
            'animate-fadeInUp': card1Visible,
            'delay-100': true
          }"
        >
          <div
            class="relative transition-colors duration-300 cursor-pointer group"
            @click="isActive1 = !isActive1"
          >
            <span
              :class="[
                'group',
                isActive1 ? 'max-sm:bg-[#FE5D37] max-sm:text-white' : '',
                'max-sm:hover:bg-[#FE5D37] max-sm:hover:text-white'
              ]"
            >
              <div
                :class="[
                  'flex items-center bg-[#ffece6] lg:group-hover:bg-[#FE5D37] justify-center mx-auto rounded-[100px] w-[100px] h-[100px] transition-colors duration-300',
                  isActive1 ? 'max-sm:bg-[#FE5D37]' : 'max-sm:bg-[#ffece6]',
                  'max-sm:hover:bg-[#FE5D37]'
                ]"
              >
                <span
                  :class="[
                    'relative bg-[#ffece6] lg:group-hover:bg-[#FE5D37] w-[15px] h-[30px] top-[-35px] left-[-6px] rounded-[50%] transition-colors duration-300',
                    isActive1 ? 'max-sm:bg-[#FE5D37]' : 'max-sm:bg-[#ffece6]',
                    'max-sm:hover:bg-[#FE5D37]'
                  ]"
                ></span>
                <i
                  :class="[
                    'text-5xl text-[#FE5D37] lg:group-hover:text-white fas fa-code transition-colors duration-300',
                    isActive1 ? 'max-sm:text-white' : 'max-sm:text-[#FE5D37]',
                    'max-sm:hover:text-white'
                  ]"
                ></i>
                <span
                  :class="[
                    'flex bg-[#ffece6] lg:group-hover:bg-[#FE5D37] relative w-[15px] h-[30px] top-[-35px] left-[6px] rounded-[50%] transition-colors duration-300',
                    isActive1 ? 'max-sm:bg-[#FE5D37]' : 'max-sm:bg-[#ffece6]',
                    'max-sm:hover:bg-[#FE5D37]'
                  ]"
                ></span>
              </div>
              <div
                :class="[
                  'relative bg-[#ffece6] lg:group-hover:bg-[#FE5D37] space-y-5 mx-auto w-[260px] max-sm:w-[350px] max-sm:rounded-[100%] h-[260px] flex-col rounded-[260px] flex items-center justify-center transition-colors duration-300',
                  isActive1 ? 'max-sm:bg-[#FE5D37]' : 'max-sm:bg-[#ffece6]',
                  'max-sm:hover:bg-[#FE5D37]'
                ]"
              >
                <div class="relative p-6 text-center top-1">
                  <h3
                    :class="[
                      'mb-3 text-3xl text-[#FE5D37] lg:group-hover:text-white font-bold transition-colors duration-300',
                      isActive1 ? 'max-sm:text-white' : 'max-sm:text-[#FE5D37]',
                      'max-sm:hover:text-white'
                    ]"
                  >Programmation</h3>
                  <p
                    :class="[
                      'pt-2 transition-colors text-gray-600 max-sm:text-[18px] lg:group-hover:text-white max-sm:w-80 duration-300 w-50',
                      isActive1 ? 'max-sm:!text-white' : 'max-sm:text-gray-600',
                      'max-sm:hover:text-white'
                    ]"
                  >
                    Enseignement de la programmation axé sur la résolution de problèmes et la compréhension approfondie des algorithmes.
                  </p>
                </div>
              </div>
            </span>
          </div>
        </div>

        <!-- Design Card -->
        <div
          ref="card2"
          class="transition-all duration-300 ease-out"
          :class="{
            'opacity-0 translate-y-10': !card2Visible,
            'animate-fadeInUp': card2Visible,
            'delay-200': true
          }"
        >
          <div @click="isActive2 = !isActive2" class="relative transition-colors duration-300 cursor-pointer group">
            <!-- Outer container with hover effect -->
            <span class="lg:group-hover:bg-[rgb(25,135,84)] lg:group-hover:text-white">
              <!-- Icon circle -->
              <div
               :class="['flex items-center justify-center mx-auto bg-[rgb(228,241,235)] rounded-[100px] w-[100px] h-[100px] lg:group-hover:bg-[rgb(25,135,84)] transition-colors duration-300',
               isActive2 ? 'max-sm:bg-[rgb(25,135,84)]' : 'max-sm:bg-[rgb(228,241,235)]',
                  'max-sm:hover:bg-[rgb(25,135,84)]']">
                <span :class="['relative w-[15px] h-[30px] top-[-39px] left-[-6px] rounded-[50%] bg-[rgb(228,241,235)] lg:group-hover:bg-[rgb(25,135,84)] transition-colors duration-300',isActive2 ? 'max-sm:bg-[rgb(25,135,84)]' : 'max-sm:bg-[rgb(228,241,235)]',
                  'max-sm:hover:bg-[rgb(25,135,84)]']"></span>
                <i :class="['fa fa-paint-brush text-5xl text-[rgb(25,135,84)] lg:group-hover:text-white transition-colors duration-300',isActive2 ? 'max-sm:text-white' : 'max-sm:text-[rgb(25,135,84)]',
                      'max-sm:hover:text-white']"></i>
                <span :class="['relative w-[15px] h-[30px] top-[-39px] left-[3px] rounded-[50%] bg-[rgb(228,241,235)] lg:group-hover:bg-[rgb(25,135,84)] transition-colors duration-300',isActive2 ? 'max-sm:bg-[rgb(25,135,84)]' : 'max-sm:bg-[rgb(228,241,235)]',
                  'max-sm:hover:bg-[rgb(25,135,84)]']"></span>
              </div>
              
              <!-- Content circle -->
              <div :class="['relative max-sm:w-[350px] max-sm:rounded-[100%] space-y-5 mx-auto w-[260px] h-[260px] flex-col rounded-[260px] flex bg-[rgb(228,241,235)] items-center justify-center lg:group-hover:bg-[rgb(25,135,84)] transition-colors duration-300',isActive2 ? 'max-sm:bg-[rgb(25,135,84)]' : 'max-sm:bg-[rgb(228,241,235)]',
                  'max-sm:hover:bg-[rgb(25,135,84)]']">
                <div class="relative p-6 text-center top-1">
                  <h3 :class="['mb-3 text-3xl font-bold text-[rgb(25,135,84)] lg:group-hover:text-white transition-colors duration-300',isActive2 ? 'max-sm:text-white' : 'max-sm:text-[rgb(25,135,84)']">Design</h3>
                  <p :class="['pt-2 text-gray-600 transition-colors duration-300 w-50 max-sm:w-80 max-sm:text-[18px] lg:group-hover:text-white',isActive2 ? 'max-sm:!text-white' : 'max-sm:text-[rgb(25,135,84)']">
                    Approche du design et de l'UX/UI pour créer des interfaces résponsive et
                    agréables à regarder.
                  </p>
                </div> 
              </div>
            </span>
          </div>
        </div>

        <!-- Soft-Skills Card -->
        <div
          ref="card3"
          class="transition-all duration-300 ease-out"
          :class="{
            'opacity-0 translate-y-10': !card3Visible,
            'animate-fadeInUp': card3Visible,
            'delay-300': true
          }"
        >
          <div @click="isActive3 = !isActive3" class="relative transition-colors duration-300 cursor-pointer group">
            <!-- Outer container with hover effect -->
            <span :class="['lg:group-hover:bg-[rgb(255,193,7)] lg:group-hover:text-white', isActive3 ? 'max-sm:bg-[rgb(255,193,7)]' : 'max-sm:bg-[rgb(252,247,235)]',
                  'max-sm:hover:bg-[rgb(255,193,7)]']">
              <!-- Icon circle -->
              <div :class="['flex items-center justify-center mx-auto bg-[rgb(252,247,235)] rounded-[100px] w-[100px] h-[100px] lg:group-hover:bg-[rgb(255,193,7)] transition-colors duration-300', isActive3 ? 'max-sm:bg-[rgb(255,193,7)]' : 'max-sm:bg-[rgb(252,247,235)]',
                  'max-sm:hover:bg-[rgb(255,193,7)]']">
                <span :class="['relative w-[15px] h-[30px] top-[-35px] left-[-6px] rounded-[50%] bg-[rgb(252,247,235)] lg:group-hover:bg-[rgb(255,193,7)] transition-colors duration-300', isActive3 ? 'max-sm:bg-[rgb(255,193,7)]' : 'max-sm:bg-[rgb(252,247,235)]',
                  'max-sm:hover:bg-[rgb(255,193,7)]']"></span>
                <i :class="['fa fa-users text-5xl !text-[rgb(255,193,7)] lg:group-hover:!text-white transition-colors duration-300', isActive3 ? 'max-sm:!text-white' : 'max-sm:text-gray-600',
                  'max-sm:hover:text-white']"></i>
                <span :class="['flex relative w-[15px] h-[30px] top-[-35px] left-[6px] rounded-[50%] bg-[rgb(252,247,235)] lg:group-hover:bg-[rgb(255,193,7)] transition-colors duration-300',, isActive3 ? 'max-sm:bg-[rgb(255,193,7)]' : 'max-sm:bg-[rgb(252,247,235)]',
                  'max-sm:hover:bg-[rgb(255,193,7)]']"></span>
              </div>
              
              <!-- Content circle -->
              <div :class="['relative max-sm:w-[350px] max-sm:rounded-[100%] space-y-5 mx-auto w-[260px] h-[260px] flex-col rounded-[260px] flex bg-[rgb(252,247,235)] items-center justify-center lg:group-hover:bg-[rgb(255,193,7)] transition-colors duration-300', isActive3 ? 'max-sm:bg-[rgb(255,193,7)]' : 'max-sm:bg-[rgb(252,247,235)]',
                  'max-sm:hover:bg-[rgb(255,193,7)]']">
                <div class="relative p-6 text-center top-1">
                  <h3 :class="['mb-3 text-3xl font-bold !text-[rgb(255,193,7)] lg:group-hover:!text-white transition-colors duration-300', isActive3 ? 'max-sm:!text-white' : 'max-sm:text-gray-600',
                  'max-sm:hover:text-white']">Soft-Skills</h3>
                  <p :class="['pt-2 text-gray-600 transition-colors duration-300 w-50 lg:group-hover:text-white max-sm:text-[18px] max-sm:w-80', isActive3 ? 'max-sm:!text-white' : 'max-sm:text-gray-600',
                  'max-sm:hover:text-white']">
                    Développement complet des Soft-Skills pour favoriser le leadership, la
                    collaboration et l'esprit d'équipe
                  </p>
                </div> 
              </div>
            </span>
          </div>
        </div>

        <!-- Robotique Card -->
        <div
          ref="card4"
          class="transition-all duration-300 ease-out"
          :class="{
            'opacity-0 translate-y-10': !card4Visible,
            'animate-fadeInUp': card4Visible,
            'delay-400': true
          }"
        >
          <div @click="isActive4 = !isActive4" class="relative transition-colors duration-300 cursor-pointer group">
            <!-- Outer container with hover effect -->
            <span :class="['lg:group-hover:bg-[rgb(13,202,240)] lg:group-hover:text-white', isActive4 ? 'max-sm:bg-[rgb(13,202,240)]' : 'max-sm:bg-[rgb(227,247,252)]',
                  'max-sm:hover:bg-[rgb(13,202,240)]']">
              <!-- Icon circle -->
              <div :class="['flex items-center justify-center mx-auto bg-[rgb(227,247,252)] rounded-[100px] w-[100px] h-[100px] lg:group-hover:bg-[rgb(13,202,240)] transition-colors duration-300', isActive4 ? 'max-sm:bg-[rgb(13,202,240)]' : 'max-sm:bg-[rgb(227,247,252)]',
                  'max-sm:hover:bg-[rgb(13,202,240)]']">
                <span :class="['relative w-[15px] h-[30px] top-[-35px] left-[-6px] rounded-[50%] bg-[rgb(227,247,252)] lg:group-hover:bg-[rgb(13,202,240)] transition-colors duration-300', isActive4 ? 'max-sm:bg-[rgb(13,202,240)]' : 'max-sm:bg-[rgb(227,247,252)]',
                  'max-sm:hover:bg-[rgb(13,202,240)]']"></span>
                <i :class="['fa fa-robot text-5xl !text-[rgb(13,202,240)] group-hover:!text-white transition-colors duration-300', isActive4 ? 'max-sm:!text-white' : 'max-sm:text-gray-600',
                  'max-sm:hover:text-white']"></i>
                <span :class="['flex relative w-[15px] h-[30px] top-[-35px] left-[6px] rounded-[50%] bg-[rgb(227,247,252)] lg:group-hover:bg-[rgb(13,202,240)] transition-colors duration-300', isActive4 ? 'max-sm:bg-[rgb(13,202,240)]' : 'max-sm:bg-[rgb(227,247,252)]',
                  'max-sm:hover:bg-[rgb(13,202,240)]']"></span>
              </div>
              
              <!-- Content circle -->
              <div :class="['relative max-sm:w-[350px] max-sm:rounded-[100%] space-y-5 mx-auto w-[260px] h-[260px] flex-col rounded-[260px] flex bg-[rgb(227,247,252)] items-center justify-center lg:group-hover:bg-[rgb(13,202,240)] transition-colors duration-300', isActive4 ? 'max-sm:bg-[rgb(13,202,240)]' : 'max-sm:bg-[rgb(227,247,252)]',
                  'max-sm:hover:bg-[rgb(13,202,240)]']">
                <div class="relative p-6 text-center top-1">
                  <h3 :class="['mb-3 text-3xl font-bold !text-[rgb(13,202,240)] lg:group-hover:!text-white transition-colors duration-300', isActive4 ? 'max-sm:!text-white' : 'max-sm:text-gray-600',
                  'max-sm:hover:text-[rgb(13,202,240)]']">Robotique</h3>
                  <p :class="['pt-2 text-gray-600 max-sm:text[18px] max-sm:w-80 transition-colors duration-300 w-50 lg:group-hover:text-white', isActive4 ? 'max-sm:!text-white' : 'max-sm:text-gray-600',
                  'max-sm:hover:text-[rgb(13,202,240)]']">
                    Compréhension approfondie de la robotique, allant de leur fonctionnement jusqu'à
                                    la construction de
                                    robots.
                  </p>
                </div> 
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const element = ref(null);
const isVisible = ref(false);

const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);
const card4 = ref(null);

const card1Visible = ref(false);
const card2Visible = ref(false);
const card3Visible = ref(false);
const card4Visible = ref(false);

const isActive1 = ref(false);
const isActive2 = ref(false);
const isActive3 = ref(false);
const isActive4 = ref(false);

const handleScroll = () => {
  if (!element.value) return;
  const rect = element.value.getBoundingClientRect();
  const isInView = (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
  if (isInView) {
    isVisible.value = true;
    setTimeout(() => card1Visible.value = true, 100);
    setTimeout(() => card2Visible.value = true, 200);
    setTimeout(() => card3Visible.value = true, 300);
    setTimeout(() => card4Visible.value = true, 400);
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