import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "https://aestaslonewolf.github.io/lightshot-random-ts/",
    plugins: [react()],
    build: {
        outDir: "./docs",
    },
});
