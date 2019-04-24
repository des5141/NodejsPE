const mongoose = require('mongoose')
const link = 'mongodb://localhost:27017/local'
mongoose.connect(link, { useNewUrlParser: true }, (err) => {
    if (err)
        return console.error(err)
    console.log('mongoose connected!')
});