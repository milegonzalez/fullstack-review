const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher');
mongoose.Promise = require('bluebird');
var promise = mongoose.connect('mongodb://localhost/repoSchema', {
  useMongoClient: true,
});

promise.once('open', function(){
  console.log('hey, its open!')
})
//do I need to requiere the database?
// var db = require('./data/db');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  username: String,
  repos: [String]
});

let Repo = mongoose.model('Repo', repoSchema);

// promise.repoSchema.insert({id: 1, username: "abc123", repos: ["a"]})
// let obj = {'username': 'milena', 'repos': []};
var obj = new Repo({
  'username': 'milena',
  'repos': ['bb']
})

obj.save(function (err) {
  if (err) console.log('err');
})


let save = (obj) => {
  // // var db = connect('mongodb://localhost:1128')
  // // TODO: Your code here
  // // This function should save a repo or repos to
  // // the MongoDB
  // repoSchema.insert(obj)
};

// promise.then(function(db){
//   Repo.insert({'username': 'milena', 'repos': ['a']}, function (err){

//   });
// });


module.exports.save = save;