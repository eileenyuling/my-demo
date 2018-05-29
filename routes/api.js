/**
 * Created by lingyu on 18/5/27.
 */
'use strict';
const express = require('express');
const router = express.Router();

router.get('/property', function(req, res) {
  res.json([{
      "id": "eyJ0eXBlIjoiUHJvcGVydHkiLCJpZCI6NzI1fQ==",
      "name": "urbanest North Terrace",
      "currency": "GBP"
    },
    {
      "id": "eyJ0eXBlIjoiUHJvcGVydHkiLCJpZCI6NTg5fQ==",
      "name": "urbanest Cleveland Street",
      "currency": "GBP"
    },
    {
      "id": "eyJ0eXBlIjoiUHJvcGVydHkiLCJpZCI6NTk0fQ==",
      "name": "urbanest Quay Street",
      "currency": "GBP"
    }]);

});

module.exports = router;
 
