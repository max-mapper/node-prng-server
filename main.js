var crypto = require('crypto'),
    fs = require("fs"),
    rbytes = require("rbytes"),
    https = require('https'),
    http = require("http"),
    url = require('url'),
    querystring = require('querystring');

var options = {
  ca:   fs.readFileSync('sub.class1.server.ca.pem'),
  key:  fs.readFileSync('ssl.key'),
  cert: fs.readFileSync('ssl.crt')
};

function onConnection(req, res) {
  var parsed = url.parse(req.url, true);
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  var random = rbytes.randomBytes(1024).toHex(); 
  if ( parsed.query.callback ) {
    res.setHeader('Content-Type', 'application/json');
    random = parsed.query.callback + "(\"" + random + "\")";
  } else {
    res.setHeader('Content-Type', 'text/plain');
  }
  res.end(random);
}

https.createServer(options, onConnection).listen(443);