import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'

// get __dirname
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

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
