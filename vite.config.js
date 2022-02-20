import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import path from 'path'

export default {
  root: path.resolve(__dirname, 'server/src'),
  base: '/dist/',
  publicDir: 'public',
  plugins: [vue(), ssr()],
  build: {
    rollupOptions: {
      output: {
        format: 'es',
      },
    },
    emptyOutDir: true,
  },
}
