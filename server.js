'use strict';

var express = require('express');
var cors = require('cors');
var fileUpload = require('express-fileupload');

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(fileUpload());

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse', (req, res) => {
  const file = req.files['upfile']; 
  res.json(
    {
      name: file.name,
      size: file.size
    }
  )
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
