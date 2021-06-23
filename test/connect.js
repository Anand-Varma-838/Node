const mongoose = require('mongoose')

mongoose.Promise = global.Promise

before(()=>{
    mongoose.connect("mongodb://localhost/project")
    mongoose.connection.once('open',()=>{
        console.log('Connection has been made...')
    }).on('error',()=>{
        console.log('Connection error',error)
    })
})
