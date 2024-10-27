import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
    svgr({
      exportAsReactComponent: true, // 確保這個選項啟用
    }),],
  prettier: {
    configFile: './.prettierrc.json',
  },
  build: {
    assetsDir: 'src/assets',
  },
  base: './',
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
