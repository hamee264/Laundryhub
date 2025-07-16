import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/', // This tells Vite to assume it's hosted at the root of your domain
  plugins: [vue()],
})
