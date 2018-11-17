const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let helperFunc = require('../helpers/github.js');

let helperFunction = helperFunc.getReposByUsername;
let savingToDatabase = helperFunc.savingToDatabase;


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/repos', function (req, res) {
  console.log('getting username from client', req.body)
  //make it a promise when refactoring
  if (req.body) {
    console.log('line 18!')
    helperFunction(req.body.term, (error, result) => {
      if (error) {
        console.log('error');
      }
      console.log('line 23!')
      savingToDatabase(result);
      // save to the database using a helper function that has to be created in
      res.status(201).send();
      // res.end();
    })
  }
});

app.get('/repos', function (req, res) {
  // TODO - your code here!

  // This route should send back the top 25 repos

});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

