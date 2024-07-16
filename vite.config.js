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
      polyfillModulePreload:false,
      rollupOptions: {
      output:{
        
      manualChunks(id) {
      if (id.includes('node_modules')) {
      return id.toString().split('node_modules/')[1].split('./')[0].toString();
      }
      }
      }
      }
      }
    

  });
};
