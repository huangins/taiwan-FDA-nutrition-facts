var webpack = require('webpack');

devConfig = {
	entry: './js/index.js',
	output: {
		filename: './dist/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel?cacheDirectory',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			}
		]
	},
    resolve: {
        extensions: ['', '.js', '.json', '.jsx', '.scss']
    }
}

module.exports = devConfig
