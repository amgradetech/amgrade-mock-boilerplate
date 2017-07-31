import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default [
  {
    entry: './src/js/index.js',
    exports: 'named',
    dest: 'public/assets/js/main.js',
    format: 'umd',
    moduleName: 'main',
    sourceMap: true,
    watch: {
      include: ['src/js/**/*.js']
    },
    plugins: [
      resolve(),
      commonjs({
        include: ['node_modules/**'],
        exclude: ['node_modules/process-es6/**']
      }),
      babel({
        babelrc: false,
        exclude: 'node_modules/**',
        presets: [
          [
            'latest',
            {
              es2015: {
                modules: false
              }
            }
          ],
          'stage-0'
        ],
        plugins: [
          'external-helpers'
        ]
      })
    ]
  },
];
