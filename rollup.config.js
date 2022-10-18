import babel from '@rollup/plugin-babel'
import dts from 'rollup-plugin-dts'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'

export default [
    {
        input: './src/index.ts',
        output: [
            {
                file: 'dist/index.ts',
                format: 'es',
                exports: 'named'
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named'
            }
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            external(),
            resolve(),
            typescript(),
            terser()
        ]
    }
]