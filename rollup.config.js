// imports ================================================== //
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import cleanup from "rollup-plugin-cleanup";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };

// main ===================================================== //
const rollupConfig = [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            postcss(),
            cleanup({
                comments: "istanbul",
                extensions: ["js", "ts"]
            }),
            typescript({
                tsconfig: "./tsconfig.json",
                declaration: true,
                declarationDir: './bundle'
            })
        ],
        external: ["react", "react-dom"],
    },
    {
        input: "bundle/cjs/index.d.ts",
        output: [{ file: "bundle/index.d.ts", format: "esm" }],
        plugins: [dts.default()],
    },
];

// exports ================================================== //
module.exports = rollupConfig;