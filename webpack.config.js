var path = require('path'),
	webpack = require('webpack');

	module.exports = {
		entry: path.join(__dirname,'src/app/index'),
		output: {
			filename: 'bundle.js',
			publicPath: '/static/',
			path: path.join(__dirname,'public/dist/js')
		},
		devTools: ['eval-source-maps'],
		plugins: [new webpack.NoErrorsPlugin(), new webpack.HotModuleReplacementPlugin()],
		module: {
			loaders: [
				{
					test: /\.js?$/,
					loaders: ['babel'],
					include: path.join(__dirname, 'src/app/'),
					exclude: /node_modules/
				},
				{
					test: /\.json?$/,
					loaders: ['json']
				}
			]
		}
	};