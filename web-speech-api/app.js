'use strict';

const express = require('express'),
    app = express(),
    path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
