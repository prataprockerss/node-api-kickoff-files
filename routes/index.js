const
  express = require('express'),
  router = express.Router()
  homeController = require('../controller/index');

router.route('/')
  .get(homeController.getHome)
  .post(homeController.postHome)


module.exports = router;
