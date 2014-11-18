var express = require('express');
var app = express();
app.use(express.static('../'));
app.listen(80);
console.log('Src Development Server - Listening on port 80');