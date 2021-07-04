const postcssEasyImport = require('postcss-easy-import')
const postcssSimpleVars = require('postcss-simple-vars')

// 使用プラグイン
const initPlugin = [
  postcssEasyImport({}),
  postcssSimpleVars({})
]

// 実行
module.exports = {
  plugins: initPlugin
}