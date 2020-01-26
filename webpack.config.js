module.exports = {
entry: './main.js',
resolve: {
extensions: ['.webpack.js', '.web.js', '.ts', '.js']
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
path: __dirname,    
filename: './bundle.js',
}
};