import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';
export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "react-common-components",
  },
  external: ["react", "react-dom","react/jsx-runtime"],
  plugins: [postcss({
      modules: true,
      extensions: ['.css'],
    }),typescript({ tsconfig: "tsconfig.json",exclude: ['**/*.stories.tsx', '**/*.test.tsx'] })],
});
