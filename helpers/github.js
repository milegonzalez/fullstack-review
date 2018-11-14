const request = require('request');
const config = require('../config.js');


let getReposByUsername = (username, cb) => {
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options, (error, response, body) => {
    // if (error) {
    //   console.log('error');
    // }
    return cb(error, body);
  });
  //  return 25 repos

  // $.ajax({
  //   url: options.url,
  //   data: data,
  //   success: function (response) {
  //     console.log(response.body);
  //     //this should send the data back to the server to save it in the database.
  //   }
  // });

};

module.exports.getReposByUsername = getReposByUsername;