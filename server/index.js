const express = require('express');
let app = express();
let bodyParser = require('body-parser');
let helperFunc = require('../helpers/github.js')

let helperFunction = helperFunc.getReposByUsername
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  console.log('req', req.query.username);

  if (req.query.username) {
    helperFunction(req.query.username, (error, result) => {
      if (error) {
        console.log('error');
      }
      res.status(200).send(result);
    })
  }
})

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // res.json(repos);
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

