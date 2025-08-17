import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer';
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';
export default defineConfig({
  plugins: [vue(),tailwindcss(),autoprefixer(),],
  resolve: {
       alias: {
         '@': resolve(__dirname, 'src'), // This allows you to use '@' as an alias for 'src'
       },
     },
})
