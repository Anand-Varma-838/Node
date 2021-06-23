const assert = require('assert')
const data = require('../models/StigeSchema')

describe('Inserting records',()=>{
    
    it('Inserting records to the databse',(done)=>{
        var char = new data({
            Description: 'Fourth',
            Completed: 'false'
        })

        char.save().then(()=>{
            assert(char.isNew === false)
            done()
        })
        
    })

})