// gobblefile.js
var gobble = require('gobble');


module.exports = gobble('src').transform('autoprefixer', {
	browsers: [
		"Android 2.3",
		"Android >= 4",
		"Chrome >= 20",
		"Firefox >= 24",
		"Explorer >= 7",
		"iOS >= 6",
		"Opera >= 12",
		"Safari >= 6"
	]});

