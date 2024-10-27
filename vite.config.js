import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: '/wedding-card/',
  plugins: [
    react(), 
    svgr({
      exportAsReactComponent: true,
    })
  ],
  prettier: {
    configFile: './.prettierrc.json',
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: `@import "@/variables.scss";`
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "@fonts": path.resolve(__dirname, 'src/fonts'),
    },
  },
})