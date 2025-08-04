import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from "vite-plugin-compression";



// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react(),compression({
      algorithm: 'brotliCompress', // or 'gzip'
      ext: '.br', // or '.gz'
    })
   ],
});