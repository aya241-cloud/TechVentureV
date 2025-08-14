<template>
  <div class="border w-[1200px] relative group max-sm:!w-93 max-sm:!relative max-sm:!left-[-12px] right-50 bg-[#fdf3ee] rounded-lg overflow-hidden transition-all duration-300">
    <button
      class="flex border bg-[#fdf3ee] border-gray-900  items-center rounded-lg max-sm:focus:[&>h2]:!text-white hover:[&>h2]:!text-white  justify-between w-full max-sm:focus:!bg-[#1852d9] p-4 text-left transform transition-all duration-200  focus:!border-[#f8a28e] focus:!border-4 group hover:!bg-[#1852d9]  "
      @click="$emit('toggle')"
    >
      <h2 class="text-lg font-medium text-gray-800 max-sm:!text-base">{{ title }}</h2>
      <svg
       class="transform rotate-180 translate-all trantion-transform"
        :class="[
                'w-5 h-5 transform transition-transform duration-300',
                svgIconClass
              ]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17 17"
        fill="currentColor"
      >
         <path
      d="M16.354 5.075l-7.855 7.854-7.853-7.854 0.707-0.707 7.145 7.146 7.148-7.147 0.708 0.708z"
    />
      </svg>
    </button>
    <div
      class="overflow-hidden transition-all duration-300 border border-gray-300"
      :class="isOpenComputed ? 'max-h-96' : 'max-h-0'"
    >
      <div class="p-4 text-gray-600">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionItem',
  props: {
    title: String,
    content: String,
    isOpen: {
      type: Boolean,
      default: false, // Changed to false for parent control
    },
  },
  emits: ['toggle'],
  computed: {
    isOpenComputed() {
      return !!this.isOpen;
    },
    svgIconClass() {
      return this.isOpen 
        ? '!rotate-0 text-[#e55432]' 
        : ' !text-gray-600';
    }
  }
};
</script>