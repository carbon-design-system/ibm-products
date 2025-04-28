import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import path from 'path';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
  },
  plugins: [
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    postcss({
      extract: path.resolve('dist/styles.css'),
      modules: false,
      use: [
        [
          'sass',
          {
            includePaths: ['node_modules'],
          },
        ],
      ],
      sourceMap: true,
    }),
    terser(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
};
