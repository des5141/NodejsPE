var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); //cors 설정


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors()) // api 위에서 사용하겠다고 선언
//API 설정
app.use('/api', require('./routes/api'));

app.use(express.static(path.join(__dirname, '../', 'fe', 'dist')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ msg: err.message })
});

module.exports = app;

//JWT 토큰생성
// const jwt = require('jsonwebtoken');
// const key = 'key'
// const token = jwt.sign({ id: 'genie', email: 'genie@geniesoft.io' }, key);
// console.log(token)

//JWT 토큰디코드
// const decoded = jwt.verify(token, key)
// console.log(decoded)


// { id: 'genie', email: 'genie@geniesoft.io', iat: 1555848119 }x
// console.log(new Date(decoded.iat * 1000).toLocaleString())x


//몽구스 연결

const mongoose = require('mongoose')

const User = require('./models/users')
// console.log(User)

// 데이터 스키마 설정
// const userSchema = new mongoose.Schema({
//    name: { type: String, default: '', unique: true, index: true },
//    age: { type: Number, default: 1 }
//  })
//
// const User = mongoose.model('User', userSchema)

mongoose.connect('mongodb://localhost:27017/local', { useNewUrlParser: true }, (err) => {
   if (err) return console.error(err)
   console.log('mongoose connected!')

   // //쓰기
   // User.create({ name: '하하' })
   //     .then(r => console.log(r))
   //      .catch(e => console.error(e))

   //읽기
   // User.find()
   //      .then(r => console.log(r))
   //      .catch(e => console.error(e))

  // 업데이트(수정)
  // User.updateOne({ _id: '5cbd50967c00ec110c8d7912' }, { $set: { age: 27 } })
  //
  // .then(r => {
  //   console.log(r)
  //   console.log('updated')
  //   return User.find()
  // })
  //
  // .then(r => console.log(r))
  // .catch(e => console.error(e))

  //삭제
  // User.remove({})
  // User.deleteMany({})

  // User.deleteOne({ name: '하하' })
  //     .then(r => console.log(r))
  //     .catch(e => console.error(e))

})
