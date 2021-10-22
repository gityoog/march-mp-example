import webpack from 'webpack'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import path from 'path'

type options = NonNullable<ConstructorParameters<typeof TsconfigPathsPlugin>[0]>

export default class TsconfigPathsWebpackContextPlugin {
  options: options
  constructor(rawOptions: options = {}) {
    this.options = rawOptions
  }
  apply(compiler: webpack.Compiler) {
    compiler.hooks.afterPlugins.tap('TsconfigPathsWebpackContextPlugin', (compiler) => {
      const tsconfigPathsPlugin = new TsconfigPathsPlugin({
        ...this.options,
        configFile: this.options.configFile || path.resolve(compiler.options.context || '', './tsconfig.json')
      })
      compiler.options.resolve = compiler.options.resolve || {}
      compiler.options.resolve.plugins = (compiler.options.resolve.plugins || []).concat(tsconfigPathsPlugin)
    })
  }
}