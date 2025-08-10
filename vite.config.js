import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base : 'https://github.com/bayu3prayitno/rena-djaja.git',
  plugins: [react(), tailwindcss()],
})
