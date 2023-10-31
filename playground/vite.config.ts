import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
  },
  resolve: {
    alias: {
      thanosql: resolve("node_modules/@smartmind-team/thanosql-editor/lib/esm/thanosql"),
    },
  },
});
