const request = require('request');
const config = require('../config.js');
const mongo = require('../database');

let getReposByUsername = (username, cb) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options, (error, response, body) => {
    console.log('body');
    if (error) {
      console.log('error line 17')
    }
    return cb(null, body);
  });
};


let savingToDatabase = (results) => {
  //loop through results
  var repos = JSON.parse(results);
  // console.log(typeof results);
   for (let i = 0; i < repos.length; i++){
     mongo.save(repos[i]);
   }
  /// call mongo.save(results[i]);
}



module.exports.getReposByUsername = getReposByUsername;
module.exports.savingToDatabase = savingToDatabase;