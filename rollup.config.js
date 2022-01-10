import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";

import pkg from "./package.json";

const input = "./src/index.ts";

const plugins = [
  replace({
    preventAssignment: true,
    __VERSION__: JSON.stringify(pkg.version),
  }),
];

/**
 * @type {import('rollup').RollupOptions}
 */
const config = [
  {
    input,
    output: [
      {
        format: "cjs",
        dir: "dist/cjs",
        esModule: true,
        exports: "named",
        preserveModules: true,
        entryFileNames: "[name].[format]",
      },
    ],
    plugins: [typescript({ outDir: "dist/cjs" }), ...plugins],
  },
  {
    input,
    output: [
      {
        format: "es",
        esModule: true,
        dir: "dist/esm",
        exports: "named",
        preserveModules: true,
      },
    ],
    plugins: [typescript({ outDir: "dist/esm" }), ...plugins],
  },
];

export default config;
