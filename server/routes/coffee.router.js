const router = require('express').Router()
const {Coffee} = require('../models')

// Your code here!
// Remember that these routes are already mounted on
// /api/coffee!
router.get('/:id'),(req,res)=>{
    if(req.prams.id.age <1){
        res.send(true)
    }
}
module.exports = router
