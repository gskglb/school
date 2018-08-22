var express = require('express')
var serveStatic = require('serve-static')

var app = express()
var path = require('path')

app.use(serveStatic(path.join(__dirname, '/dist/')))

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port
  console.log('App now running on port', port)
})

