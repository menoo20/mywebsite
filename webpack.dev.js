const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require ("html-webpack-plugin");
let htmlPageNames = ['index', 'example'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
    return new htmlWebpackPlugin({
      template: `${name}.html`, // relative path to the HTML files
      filename: `${name}.html`, // output HTML files
      chunks: [`${name}`] // respective JS files
    });
  });
var CopyWebpackPlugin = require("copy-webpack-plugin");
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
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'images/[hash][ext][query]',
        filename: '[name].js',
    },
    module: {
        rules: [
                {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
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
        ]
},
plugins: [
    new htmlWebpackPlugin({
        template:"index.html",
        filename: "index.html",
        chunks: ['index']
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
    new CopyWebpackPlugin({
        patterns: [
            {from:'images',to:'images'},
        ]
       
    }), 
]
};
