import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // По умолчанию '@' указывает на 'src'
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)), // Алиас для components
    },
  },
});
