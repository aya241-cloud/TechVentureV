<template>
  <div 
    class="flex items-center justify-center transition duration-100" 
    :class="[containerClass, { 'h-screen w-screen': fullScreen }]"
     
  >
    <div 
      class="border-solid rounded-full animate-spin"
      
      :style="{
        width: size + 'px',
        height: size + 'px',
        borderTopColor: spinnerColor,
        borderRightColor: spinnerColor,
        borderBottomColor: spinnerColor,
        borderLeftColor: 'transparent',
        borderWidth: thickness + 'px',
        '--animation-speed': animationSpeed + 's',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'CircleLoader',
  props: {
    spinnerColor: {
      type: String,
      default: '#FE5D37'
    },
    thickness: {
      type: Number,
      default: 4,
      validator: value => value > 0
    },
    size: {
      type: Number,
      default: 50
    },
    animationSpeed: {
      type: Number,
      default: 0.75,
      validator: value => value > 0 && value <= 2
    },
    show: {
      type: Boolean,
      default: true,
      duration:10
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    containerClass: {
      type: String,
      default: ''
    }
  }}
</script>

<style>
@keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    .spinner-animate {
      animation: spin var(--spinner-speed) linear infinite;
    }
</style>