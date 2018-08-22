var express = require('express')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(__dirname))

var server = app.listen(process.env.PORT || 5000, function() {
  var port = server.address().port
  console.log('App now running on port', port)
})

