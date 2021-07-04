const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.jsx',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    resolve: {
        alias: {
        '@': path.resolve(__dirname, 'src'),
        '@comps': path.resolve(__dirname, 'src/components'),
        },
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 3000,
        hot: isDev,
        historyApiFallback: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                              '@babel/preset-env',
                              '@babel/preset-react'
                            ],
                        }
                    },
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDev,
                        }
                    },
                    'sass-loader'
                ]
            },
        ]
    }
}
