import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/sg-budget-breakdown/",
  root: "src",
  build: {
    // See this for more info: https://vitejs.dev/guide/build.html#multi-page-app
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        details: resolve(__dirname, "details/index.html"),
        team: resolve(__dirname, "team/index.html"),
        join: resolve(__dirname, "join/index.html"),
      },
    },
  },
  appType: 'mpa',
});
