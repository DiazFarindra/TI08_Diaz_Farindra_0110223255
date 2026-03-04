import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        home: 'home.html',
        study: 'study.html',
        gallery: 'gallery.html',
        datatables: 'datatables.html',
        login: 'login.html',
      },
    },
  },
})
