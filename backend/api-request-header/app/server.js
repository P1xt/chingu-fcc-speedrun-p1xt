// Get dependencies
const express = require('express');
const http = require('http');
const app = express();

// Get our API routes
const api = require('./routes/routes');

// Make sure our app can find our css and javascript frontend files
// which are located in the public folder
app.use(express.static('public'));

// Route to the routes :D
app.use('/', api);

// Enable pug (jade) for view rendering
app.set('view engine', 'pug');

// Create the server and fire it up
const server = http.createServer(app);
const port = process.env.PORT || '3000';
app.set('port', port);
server.listen(port, () => console.log(`API running on localhost:${port}`));