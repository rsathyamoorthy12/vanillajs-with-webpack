var webpack=require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config={
	entry : SRC_DIR + "/index.js",
	output:{
		path : DIST_DIR,
		filename: "bundle.js",
		publicPath : "/app/"
	},
	module:{
		rules:[
			{
		        test: /\.css$/,
		        use: [ 'style-loader', 'css-loader' ]
		      },
			{
				test : /\.jsx?$/,
				include : SRC_DIR,
				loader: "babel-loader",
				query:{
					presets:["env",'stage-2']
				}
			}
		]
	}
}

module.exports= config;