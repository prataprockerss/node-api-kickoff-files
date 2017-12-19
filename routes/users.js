const
  express = require('express'),
  router = express.Router(),
  M = require('../models/users'),
  C = require('../config/constants')

router.get('/get', (req, res) =>{
  M.get((error,results) => {
    if(error) {
      let response = {
        status: 0,
        message: C.MESSAGES.errormsg,
        error: error
      }
      res.status(501).send(response)
    } else{
      let response = {
        status: 1, 
        data: results
      }
      res.status(200).send(response)
    }
  })
})

module.exports = router;