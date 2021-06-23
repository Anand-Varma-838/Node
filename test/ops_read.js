const assert = require('assert')
const data = require('../models/StigeSchema')

describe('Finding records',()=>{

    it('Finds all records with completed as false from the databse',(done)=>{
        data.find({Completed: 'false'}).then((result)=>{
            console.log(result)
            done()
        })

    })

})