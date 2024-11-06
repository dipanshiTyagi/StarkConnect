// import path from "path"
// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })

import path from "path";
import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")  // This sets `@` to the `src` directory
    }
  }
};

