// app/models/user.js
// require mongoose module
var mongoose = require('mongoose');

// define our user model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('User', {
  name : {type : String, default: ''},
  ip   : {type : Number, default: ''}
});
