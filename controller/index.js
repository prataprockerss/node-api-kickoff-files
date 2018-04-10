const
    C = require('../config/constants'),
    M = require('../models/index')
  
exports.home = function(req, res) {
    let response = { 
      title: 'index Page',
    }
    res.status(200).send(response)
  }