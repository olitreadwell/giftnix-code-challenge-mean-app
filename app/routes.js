// app/routes.js

// grab the user model we created
var User = require('./models/user');

module.exports = function(app) {

  // server routes ===========================================================
  // for things like api calls

  //api route to get all users
  app.get('/api/users', function(request, response){
    // use mongoose to get all users from the db
    User.find(function(error, users){
      // if there is an error retrieving, send the error.
      // nothing after response.send(error) will execute
      if (error)
        response.send(error);

      response.json(users);
    });
  });

  //api route to get ip address
  var publicIp = require('public-ip');
  app.get('/api/my_ip', function(request, response){
    var my_ip = publicIp.v4(function(error, ip_address){
      if (error)
        response.send(error);
      ip_address;
    });
    console.log(my_ip);
  });

  // route to handle create goes here (app.post)

  // route to handle delete goes here (app.delete)

  // frontend routes =========================================================
  // route to handle all angular requests
  app.get('*', function(request, response) {
    response.sendfile('./public/views/index.html'); // load our public/index.html file
  });

};
