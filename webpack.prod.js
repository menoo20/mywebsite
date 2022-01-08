const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require ("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry:{
        index: './src/client/index.js',
        about: './src/client/about.js',
        skills: './src/client/skills.js',
        projects: './src/client/projects.js',
        certificates: './src/client/certificates.js',
        contact: './src/client/contact.js',
        success: "./src/client/success.js"

    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    mode: 'development',
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      },
    module: {
        rules: [
                {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    type:"asset/resource",
                    parser: {
                        dataUrlCondition:{
                            maxSize: 30 * 1024 ,
                        }
                    }
                },
                {
                    test: /\.css$/i,
                    use:  [MiniCssExtractPlugin.loader, "css-loader"]
                  },
        ]
},
plugins: [
    new htmlWebpackPlugin({
        template:"index.html",
        filename: "index.html",
        chunks: ["index"],
    }),
    new htmlWebpackPlugin({
        template: "about.html",
        filename: "about.html",
        chunks: ["about"],
    }),
    new htmlWebpackPlugin({
        template: "skills.html",
        filename: "skills.html",
        chunks: ["skills"],
    }),
    new htmlWebpackPlugin({
        template: "projects.html",
        filename: "projects.html",
        chunks: ["projects"],
    }),
    new htmlWebpackPlugin({
        template: "certificates.html",
        filename: "certificates.html",
        chunks: ["certificates"],
    }),
    new htmlWebpackPlugin({
        template: "contact.html",
        filename: "contact.html",
        chunks: ["contact"],
    }),
    new htmlWebpackPlugin({
        template: "success.html",
        filename: "success.html",
        chunks: ["success"],
    }),
    new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist/**/*")],
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new CopyWebpackPlugin({
            patterns: [
                {from:'images',to:'images'} 
            ]
        }), 
        new WorkboxPlugin.GenerateSW()

]
};
