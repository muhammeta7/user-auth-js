// app.js
var http = require('http');
const express = require('express')
var fs = require('fs');
const port = 3000;
// Create Express app
const app = express()

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('index.html').pipe(res)
})

server.listen(port, () => console.log('Server running on port 3000!'))

// // Start the Express server
// app.listen(3000, () => console.log('Server running on port 3000!'))






