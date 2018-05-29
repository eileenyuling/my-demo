/**
 * Created by lingyu on 18/5/26.
 */
'use strict';
const express = require('express');
const path = require('path');
const router = express.Router();
const apiRoutes = require('./api');
router.use('/api', apiRoutes);
router.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});





module.exports = router;
 
