module.exports = {
entry: './src/main.js',
resolve: {
extensions: ['.webpack.js', '.web.js', '.ts', '.js']
},
devServer: {
    contentBase: __dirname+'/public'
},
module: {
rules: [
{ test: /.js$/, 
  exclude: /node_modules/,
  use: {
      loader: 'babel-loader',
  }
}
]
},
output: {
path: __dirname + '/public',    
filename: './bundle.js',
}
};