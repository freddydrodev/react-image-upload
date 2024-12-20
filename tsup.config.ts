import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    entry: ["src/index.tsx"],
    splitting: false,
    sourcemap: true,
    clean: true,
    minify: !options.watch,
    format: ["cjs", "esm"],
    dts: true,
  };
});
