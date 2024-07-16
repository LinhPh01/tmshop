import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
     root: "./",
    base: "./",
    plugins: [react()],
    build: {
      outDir: 'build',
      polyfillModulePreload: false,
      rollupOptions: {
        output: {
          entryFileNames: 'app.js',
          chunkFileNames: 'app-[hash].js',
          assetFileNames: 'app-[hash][extname]',
          manualChunks(id) {
            if (id.includes('src/app.js')) {
              return 'app'; // Tạo chunk cho file src/app.js
            }
          }
        }
      }
    }
  });

 
};
