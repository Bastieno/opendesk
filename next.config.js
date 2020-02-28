const withSass = require('@zeit/next-sass');
const path = require('path');
const withSourceMaps = require('@zeit/next-source-maps');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withSass(withSourceMaps({
  webpack: config => {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins
    ];
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    config.resolve.modules.push(path.resolve('./'));

    return config;
  },
  exportTrailingSlash: isProd
}));
