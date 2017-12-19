const
  express = require('express'),
  router = express.Router(),
  C = require('../config/constants'),
  M = require('../models/index')


router.get('/', function(req, res, next) {
  let response = { 
    title: 'index Page',
  }
  res.status(200).send(response)
});


module.exports = router;
