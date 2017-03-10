const express = require('express');
const router = express.Router();

// modules this api provides routing for
const requestparser = require('../request-header/parser');

// Request Header Microservice
// (note, catching a variety of urls and routing them to the same place)
router.route('/api/request-header').get(requestparser.parse);
router.route('/api').get(requestparser.parse);

// If it's not an api request, display the index page (found in frontend)
router.get('*', (req, res) => {
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.render('index.pug', {
    fullUrl: fullUrl,
    title: 'Request Header Parser Microservice'
  });
});

module.exports = router;