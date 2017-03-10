const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage }); 

// modules this api provides routing for
const fileMulter = require('../file/metadata');

// File Metadata Microservice
// (note, catching a variety of urls and routing them to the same place)
router.route('/api/file-size').post(upload.single('file'),fileMulter.parse);
router.route('/api').post(upload.single('file'),fileMulter.parse);

// If it's not an api request, display the index page (found in frontend)
router.get('*', (req, res) => {
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.render('index.pug', {
    fullUrl: fullUrl,
    title: 'File Metadata Microservice'
  });
});

module.exports = router;