import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/button.tsx", "styled-system/*"],
  format: ["esm"],
  dts: true,
  sourcemap: false,
  external: ["react"],
  bundle: false,
  ...options,
}));
