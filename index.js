var mongoose = require('mongoose');
var schema = require('./schema');

var ErrorHandler = function(error) {
	if (error) {
		console.log(error);
		process.exit(1);
	}
}

mongoose.connect('mongodb://localhost:27017/test');

var User = mongoose.model('User', schema, 'users');

var user = new User({
	name: 'John Smith',
	email: 'john@smith.io'
});

user.save(function(error) {
	ErrorHandler(error);

	User.find(
		{email: 'john@smith.io'}, 
		function(error, docs) {
			ErrorHandler(error);

			console.log(require('util').inspect(docs));
			process.exit(0);
		});
});