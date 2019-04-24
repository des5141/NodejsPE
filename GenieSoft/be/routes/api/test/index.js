var express = require('express');
var createError = require('http-errors');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({ msg: 'hello', a: 'helloworld' })
});

router.get('/hello', function(req, res, next) {
  res.send({ msg: 'hello', a: 1111 })
});

router.all('*', function(req, res, next) {
  next(createError(404, 'API를 찾을 수 없습니다.'));
});

module.exports = router;
