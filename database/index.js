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
  repos: [String]
});

let Repo = mongoose.model('Repo', repoSchema);

//this is how to save a query to mongoDB
// var obj = new Repo({
//   'username': 'Maria',
//   'repos': ['bb']
// });

// obj.save(function (err) {
//   if (err) console.log('err');
// });

let save = (person, err) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
};



module.exports.save = save;