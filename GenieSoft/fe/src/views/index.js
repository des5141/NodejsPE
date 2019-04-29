var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const User = require('../../../models/users')


// router.get('/', function(req, res, next) {
//   const us = [
//     {
//       name: '테스트1',
//       age: 14
//     },
//     {
//       name: '테스트2',
//       age: 24
//     }
//   ]
//   res.send({ users: us })
// });


module.exports = router;

  //Restful
  router.get('/', function(req, res, next) {

    User.find()
      .then(r => {
        res.send({ success : true, users: r})
      })
      .catch(e => {
        res.send({ success : false})
      })

  // console.log(req.query)
  // console.log(req.body)
  //
  // res.send({ users: us })
});

router.post('/', (req, res, next) => {

  const { name, age } = req.body
  const u = new User({ name, age })
    u.save()
      .then(r => {
        res.send({ success: true, msg: r })
      })
      .catch(e => {
        res.send({ success: false, msg: e.message })
      })

  // console.log(req.query)
  // console.log(req.body)
  // res.send({ success: true, msg: 'post ok' })
})

router.put('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({ success: true, msg: 'put ok' })
})

router.delete('/', (req, res, next) => {
  console.log(req.query)
  console.log(req.body)
  res.send({ success: true, msg: 'del ok' })
})


router.all('*', function(req, res, next) {
  next(createError(404, 'API를 찾을 수 없습니다.'));
});

module.exports = router;
