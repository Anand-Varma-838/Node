const assert = require('assert')
const data = require('../models/StigeSchema')
describe('Updating records',()=>{

    it('Updating the parameter Completed from false to true on all documents in the database',(done)=>{
        data.updateMany({Completed:'false'},{Completed:'true'}).then((result)=>{
            console.log(result)
            done()

        })

    })

})