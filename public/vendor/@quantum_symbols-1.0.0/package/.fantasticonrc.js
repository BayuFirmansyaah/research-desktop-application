'use strict'

const codepoints = require('./font/quantum-symbols.json')

module.exports = {
  inputDir: './icons',
  outputDir: './font',
  fontTypes: ['woff2', 'woff'],
  assetTypes: ['css', 'scss', 'json'],
  name: 'quantum-symbols',
  codepoints,
  prefix: 'sym',
  selector: '.sym',
  fontsUrl: './fonts',
  formatOptions: {
    json: {
      indent: 2
    }
  },
  // Use our custom Handlebars templates
  templates: {
    css: './scripts/font/css.hbs',
    scss: './scripts/font/scss.hbs'
  },
  pathOptions: {
    json: './font/quantum-symbols.json',
    css: './font/quantum-symbols.css',
    scss: './font/quantum-symbols.scss',
    woff: './font/fonts/quantum-symbols.woff',
    woff2: './font/fonts/quantum-symbols.woff2'
  }
}
