const
  express = require('express'),
  router = express.Router()
  homeController = require('../controller/index');

router.get('/', homeController.home);


module.exports = router;
