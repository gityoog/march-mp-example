import webpack from 'webpack'
import path from 'path'
import TsCheckerPlugin from 'fork-ts-checker-webpack-plugin'
import ProcessPlugin from '../plugins/process-plugin'

export default {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../../dist/development')
  },
  plugins: [
    new TsCheckerPlugin(),
    new ProcessPlugin(),
    new webpack.DefinePlugin({
      Baseurl: 'https://development'
    })
  ]
} as webpack.Configuration