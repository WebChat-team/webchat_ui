// imports ================================================== //
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import cleanup from "rollup-plugin-cleanup";
import dts from "rollup-plugin-dts";
import del from "rollup-plugin-delete";
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
            del({
                targets: "./bundle/lib"
            }),
            resolve(),
            commonjs(),
            terser(),
            postcss({
                modules: true
            }),
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
        external: ["react", "react-dom", "@/shared/types"],
    },
    {
        input: "./bundle/lib/cjs/index.d.ts",
        output: [{
            file: packageJson.types,
            format: "esm"
        }],
        plugins: [
            dts.default(),
            del({
                targets: [
                    "./bundle/lib/cjs/components",
                    "./bundle/lib/cjs/shared",
                    "./bundle/lib/esm/components",
                    "./bundle/lib/esm/shared"
                ],
                hook: "buildEnd"
            })
        ],
    },
];

// exports ================================================== //
module.exports = rollupConfig;