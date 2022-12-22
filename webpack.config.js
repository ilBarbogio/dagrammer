const path = require('path')
const CopyPlugin=require("copy-webpack-plugin")

module.exports = {
  plugins:[
    new CopyPlugin({
      patterns:[
        {from:"./src/index.html",to:"./index.html"},
        {from:"./src/styles.css",to:"./styles.css"},
        {from:"./src/favicon.ico",to:"./favicon.ico"},
      ]
    })
  ],
  mode:"development",
  watch:true,
  watchOptions:{
    ignored:"/node_modules/"
  },
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};