import ts from '@wessberg/rollup-plugin-ts'

export default {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    format: 'es'
  },
  plugins: [ts()]
}
