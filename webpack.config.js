
// Указываем путь 
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')
// для картинок 
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// настраиваем webpack 
module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    resolve: {
        modules: [
          path.join(__dirname, "node_modules")
        ]
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },{
            test:/\.css$/,
            use: [
                {loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                // лодер который помогает разделить css и JS файлы
                MiniCssExtractPlugin.loader,
                {loader: 'css-loader',
                        options: {
                            // для того чтобы легче где находится ошибка
                            sourceMap: true
                        }
                    },
                {loader:'postcss-loader',
                        options: {
                            config:{ path:'src/js/postcss.config.js' }
                        }}
            ]
        }, {
            test: /\.scss$/,
            use: [
                {loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                MiniCssExtractPlugin.loader,
                {loader: 'css-loader',
                        options: {
                            // для того чтобы легче где находится ошибка
                            sourceMap: true
                        }
                    },
                {loader:'postcss-loader',
                        options: {
                            config:{ path:'src/js/postcss.config.js' },
                            // для того чтобы легче где находится ошибка
                            sourceMap: true
                        }},
                    {loader: 'sass-loader',
                        options: {
                            // для того чтобы легче где находится ошибка
                            sourceMap: true
                        }
                    }
                ]
        },
        {
            test: /\.(woff2?|ttf|otf|eot|svg)$/,
            exclude: /node_modules/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
        }
        // {
        //     test: /\.(png|jpg|gif|svg)$/,
        //     exclude: /node_modules/,
        //     loader: 'file-loader',
        //     options: {
        //         name: '[name].[ext]'
        //     }
        // }
    ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }), 
        // new HtmlWebpackPlugin({
        //     hash: false,
        //     template: './index.html',
        //     filename: './index.html'
        // }),
        new CopyWebpackPlugin([
            {from: './src/style/fonts', to: './assets/fonts'},
            {from: './src/images', to: './assets/images'}
        ]),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}