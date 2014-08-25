module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  },
  devtool: '#inline-source-map',
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx-loader" }
    ]
  }
};
