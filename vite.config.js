import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],

    theme: {
    extend: {
      colors: {
       primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        light: 'var(--light)',
        dark: 'var(--dark)',
        muted: 'var(--muted)',
        white: 'var(--white)',
        background: 'var(--background)',
        card: 'var(--card)',
        border: 'var(--border)',
      },
      
    },
  },
})