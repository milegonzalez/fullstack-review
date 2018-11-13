const request = require('request');
const config = require('../config.js');

request(options, function (err, res, body) {
  let json = JSON.parse(body);
  console.log(json);
});

let getReposByUsername = (username/* TODO */) => {
GET /repos/`${username}`/`${username}`.rb
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  //added this
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com',
    // I added this.
    // method: 'GET',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
}

module.exports.getReposByUsername = getReposByUsername;