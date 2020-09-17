const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extensionConfig = {
    entry: './src/extension/index.js',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'extension'),
        libraryTarget: 'commonjs2'
    },
    mode: 'production'
};

// TODO dynamically find all dashboard html files for each entry
const dashboardConfig = {
    entry: {
        panel: ['./src/dashboard/panel.js']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dashboard')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'panel.html',
            template: './src/dashboard/panel.html',
            chunks: ['panel']
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    mode: 'production'
};

const graphicsConfig = {
    entry: {
        index: ['./src/graphics/index.js']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'graphics')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/graphics/index.html',
            chunks: ['index']
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    mode: 'production'
};

module.exports = [
    extensionConfig,
    dashboardConfig,
    graphicsConfig
];
