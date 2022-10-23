const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Fancy Frogs Restaurant',
        })
    ],
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader','css-loader']
        },
        {
            test: /\.(png|jpg|jpeg|svg|gif)$/i,
            type: 'asset/resource'
        }
    ]
}