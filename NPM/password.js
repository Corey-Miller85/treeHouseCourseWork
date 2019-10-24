const unsecurePlainTextPassword = 'password';
var bcrypt = require('bcryptjs');
var colors = require('ccolors')
bcrypt.genSalt(10, function(err, salt) {
  bcrypt.hash(unsecurePlainTextPassword, salt, function(err, hash) {
    console.log(hash.green);
  });
});