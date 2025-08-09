import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          '0%, 100%': { color: '#dc2626' }, // red-600
          '50%': { color: '#000000ff' },      // red-400
        },
      },
      animation: {
        'color-change': 'colorChange 1s ease-in-out infinite',
      },
    },
  },
  plugins: [react(), tailwindcss()],
})
