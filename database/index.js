const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var promise = mongoose.connect('mongodb://localhost/repoSchema', {
  useMongoClient: true,
});

promise.once('open', function(){
  console.log('hey, its open!')
});

let repoSchema = mongoose.Schema({
  username: String,
  repoName: String,
  repos: [String],

});

let Repo = mongoose.model('Repo', repoSchema);

//this is how to save a query to mongoDB
// var obj = new Repo({
//   'username': 'LEONOR',
//   'repos': ['bb']
// });

// obj.save(function (err) {
//   if (err) console.log('err');
// });

let save = (data, err) => {

  // console.log('this is data', data)
  var newUser = new Repo ({
    'username': data.owner.login,
    'repos': data.owner.html_url
  })

  newUser.save((err) => {
    if(err) console.log('err');
  });
};



module.exports.save = save;