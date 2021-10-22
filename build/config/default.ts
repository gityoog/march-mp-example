import webpack from 'webpack'
import MPEntryPlugin, { fixVue3This, valueLoader, tsxLoader } from 'march-mp/dist/compiler'
import TsconfigPathsWebpackContextPlugin from '../plugins/tsconfig-paths-webpack-context-plugin'
import path from 'path'

export default {
  output: {
    clean: true,
    filename: '[name]',
    globalObject: 'wx'
  },
  // 重要
  context: path.resolve(__dirname, '../../src'),
  target: ['web', 'es5'],
  entry: {
    'app.js': './app.ts'
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"]
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'babel-loader',
      //       options: {
      //         presets: ['@babel/preset-env']
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          publicPath: '/',
          name: 'images/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: valueLoader
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [fixVue3This]
              })
            }
          }
        ]
      },
      {
        test: /.tsx$/,
        use: tsxLoader
      }
    ]
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: false
  },
  plugins: [
    new TsconfigPathsWebpackContextPlugin(),
    new MPEntryPlugin()
  ]
} as webpack.Configuration
