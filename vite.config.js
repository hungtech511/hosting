import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'image',
  resolve: {
    alias: [
      { find: "@asset", replacement: "/public/image/" },
      { find: "@assets", replacement: "/src/Assets" },
      { find: "@components", replacement: "/src/Components" },
      { find: "@pages", replacement: "/src/Pages" },
      { find: "@routers", replacement: "/src/Routers" },
      { find: "@layouts", replacement: "/src/Layouts" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@custom", replacement: "/src/Custom" },
    ],
  },
})
