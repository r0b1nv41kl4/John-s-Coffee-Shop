import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import eslint from 'vite-plugin-eslint';
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [tailwindcss(), eslint()],
  base: './',
    build: {
    rollupOptions: {
      input: {
        index: resolve(process.cwd(), 'index.html'),
        menu: resolve(process.cwd(), 'menu.html'),
        item: resolve(process.cwd(), 'item.html'),
        order: resolve(process.cwd(), 'order.html'),
        delivery: resolve(process.cwd(), 'delivery.html'),
      },
    },
  },
});