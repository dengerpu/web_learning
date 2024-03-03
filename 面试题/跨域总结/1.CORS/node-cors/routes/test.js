var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    code: 1,
    message: 'test GET请求'
  });
});
router.post('/', function(req, res, next) {
  res.send({
    code: 1,
    message: 'test POST请求'
  });
});

module.exports = router;
