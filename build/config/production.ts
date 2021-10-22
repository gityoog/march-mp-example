import webpack from 'webpack'
import path from 'path'
import ProcessPlugin from '../plugins/process-plugin'

export default {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../../dist/production')
  },
  plugins: [
    new ProcessPlugin(),
    new webpack.DefinePlugin({
      Baseurl: 'https://production'
    })
  ]
} as webpack.Configuration