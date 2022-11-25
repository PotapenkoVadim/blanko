const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  const devMode = mode === 'development';
  const target = devMode ? 'web' : 'browserslist';
  const devtool = devMode ? 'source-map' : undefined;

  return {
    mode,
    target,
    devtool,
    devServer: {
      port: 3000,
      open: true
    },
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'app.ts')],
    output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      filename: devMode ? '[name].js' : '[name].[contenthash].js',
      assetModuleFilename: devMode ? 'assets/[name][ext]' : 'assets/[hash][ext]'
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
      new HtmlWebpackplugin({
        template: path.resolve(__dirname, 'src', 'index.html')
      }),
      new MiniCssExtractPlugin({
        filename: devMode ? '[name].css' : '[name].[contenthash].css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader'
        },
        {
          test: /\.(c|sa|sc)ss$/i,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [require('postcss-preset-env')]
                }
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.(woff2?|ttf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]'
          }
        },
        {
          test: /\.(jpe?g|png|webp|gif|svg)$/i,
          use: [{
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { progressive: true },
              optipng: { enabled: true },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: { interlaced: false },
              webp: { quality: 75 }
            }
          }],
          type: 'asset/resource'
        },
        {
          test: /\.m?js$/i,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        }
      ]
    }
  }
}