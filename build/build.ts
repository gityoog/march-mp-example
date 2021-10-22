import webpack from 'webpack'
import webpackMerge from 'webpack-merge'
import MPProductionConfig from './config/production'
import MPDefaultConfig from './config/default'

function MPDev(...configs: webpack.Configuration[]) {
  const compiler = webpack(
    webpackMerge(
      MPDefaultConfig,
      MPProductionConfig,
      ...configs
    )
  )
  compiler.watch({}, (e) => {
    if (e) throw e
  })
  return compiler
}

MPDev()