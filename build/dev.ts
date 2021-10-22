import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import MPDevelopmentConfig from './config/development'
import MPDefaultConfig from './config/default'

function MPDev(...configs: webpack.Configuration[]) {
  const compiler = webpack(
    webpackMerge(
      MPDefaultConfig,
      MPDevelopmentConfig,
      ...configs
    )
  )
  compiler.watch({}, (e) => {
    if (e) throw e
  })
  return compiler
}

MPDev()