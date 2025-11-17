import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// เปลี่ยน 'th8-ai-vue-site' ให้ตรงกับชื่อ repo ของคุณบน GitHub
export default defineConfig({
  base: '/th8-ai-site/',
  plugins: [vue()],
})
