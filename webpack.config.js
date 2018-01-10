const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

// const consumeVideo = require('./src/assets/consume.mp4');
// console.log('consumeVideo', consumeVideo);

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    entry: {
        index: __dirname + '/src/js/index.js',
        consume: __dirname + '/src/js/consume.js',
        about: __dirname + '/src/js/about.js',
        newsroom: __dirname + '/src/js/newsroom.js',
        newsdetail: __dirname + '/src/js/newsdetail.js',
        english: __dirname + '/src/js/english.js',
        join: __dirname + '/src/js/join.js',
        jobs: __dirname + '/src/js/jobs.js',
        professional: __dirname + '/src/js/professional.js',
    },
    output: {
        filename: 'js/[name]-[hash].bundle.js',
        path: __dirname + '/dist/',
        publicPath: '/'
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        inline: true
    },
    resolve: {
        alias: {
            '@': resolve('src'),
            'scss': resolve('src/scss'),
            'js': resolve('src/js'),
            'libs': resolve('src/libs'),
            'data': resolve('src/data'),
            'img': resolve('src/img')
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {loader: 'css-loader', options: {importLoaders: 1}},
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {loader: 'css-loader', options: {importLoaders: 1}},
                        'postcss-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(mp4|png|jpg|jpeg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[name].[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-withimg-loader'
                    },
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src']
                        }
                    }
                ],

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'template/index.html',
            filename: 'index.html',
            chunks: ['index'],
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true
            },
            inject: 'head'
        }),
        new HtmlWebpackPlugin({
            template: 'template/consume.html',
            filename: 'consume.html',
            chunks: ['consume'],
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true
            }
            // item4Video: consumeVideo
        }),
        new HtmlWebpackPlugin({
            template: 'template/newsroom.html',
            filename: 'newsroom.html',
            chunks: ['newsroom'],
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true
            }
        }),
        new HtmlWebpackPlugin({
            template: 'template/english.html',
            filename: 'en/index.html',
            chunks: ['english'],
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true
            }
        }),
        new HtmlWebpackPlugin({
            template: 'template/about.html',
            filename: 'about.html',
            chunks: ['about'],
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true
            }
        }),
        new HtmlWebpackPlugin({
            template: 'template/join.html',
            filename: 'join.html',
            chunks: ['join'],
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true
            }
        }),
        new HtmlWebpackPlugin({
            template: 'template/jobs.html',
            filename: 'jobs.html',
            chunks: ['jobs'],
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true
            }
        }),
        new HtmlWebpackPlugin({
            template: 'template/professional.html',
            filename: 'professional.html',
            chunks: ['professional'],
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true
            }
        }),
        new HtmlWebpackPlugin({
            template: 'template/newsdetail.html',
            filename: 'newsdetail.html',
            chunks: ['newsdetail'],
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true
            }
        }),

        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin("css/[name]-[hash].css"),
        new CleanWebpackPlugin(['dist/js/*.*', 'dist/*.*', 'dist/css/*.*'], {
            root: __dirname,
            verbose: true,
            dry: false
        })
        // new webpack.HotModuleReplacementPlugin()
    ]
};