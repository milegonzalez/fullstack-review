const request = require('request');
const config = require('../config.js');


let getReposByUsername = (username, cb) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options, (error, response, body) => {
    return cb(error, body);
  });
};

module.exports.getReposByUsername = getReposByUsername;