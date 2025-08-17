import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';
export default defineConfig({
  plugins: [vue(),tailwindcss()],
  resolve: {
       alias: {
         '@': resolve(__dirname, 'src'), // This allows you to use '@' as an alias for 'src'
       },
       tailwindcss,
       autoprefixer,
     },
})
