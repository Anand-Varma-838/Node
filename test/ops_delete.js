const assert = require('assert')
const data = require('../models/StigeSchema')

describe('Deleting records',()=>{

    it('Deleting one record from the databse',(done)=>{
        data.findOneAndRemove({Description: 'Third'}).then((result)=>{
                done()
            })
        })
    })
