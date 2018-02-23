import npm from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  entry: 'index.js',
  format: 'umd',
  moduleName: 'ual',
  globals: {},
  plugins: [
    npm({
      jsnext: true
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  dest: './build/ual-seatmap.js',
  sourceMap: true
}
