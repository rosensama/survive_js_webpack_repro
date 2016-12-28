const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.setupCSS = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: paths
        }
      ]
    }
  };
};

exports.extractCSS = function(paths) {
  return {
    module: {
      rules: [
          // Extract CSS during build
          {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
              fallbackLoader: 'style-loader',
              loader: 'css-loader'
            }),
            include: paths
          },
          {
            test: /\.(eot|svg|png|ttf|woff|woff2)$/,
            loader: 'file-loader'
          }
      ]
    },
    plugins: [
      // Output extracted CSS to a file
      new ExtractTextPlugin('[name].[chunkhash].css')
    ]
  };
};

