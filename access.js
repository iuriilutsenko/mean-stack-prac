var mongoose = require('mongoose');
var productSchema = require('./user');

var User = mongoose.model('User', productSchema);

var user = new User({
	profile: {
		username: 'vkarpov15'
	}
});

modifyUserProfile(u, {
	picture: 'http://pbs.twimg.com/profile_images/550304223036854272/Wwmwuh2t.png'
});

function modifyUserProfile(user, profile, callback) {
	user.profile = profile;
	user.save(function(error, user) {

	});
}