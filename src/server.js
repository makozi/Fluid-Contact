/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
*/
// const express = require('express');
// const app = express();

// This serves static files from the specified directory
// app.use(express.static(__dirname + '/build'));

// const server = app.listen(8081, () => {

//   const host = server.address().address;
//   const port = server.address().port;

//   console.log('App listening at http://%s:%s', host, port);
// });




// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);