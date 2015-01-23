var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.resolve('.')));
app.listen(80);
console.log('Src Development Server - Listening on port 80');
