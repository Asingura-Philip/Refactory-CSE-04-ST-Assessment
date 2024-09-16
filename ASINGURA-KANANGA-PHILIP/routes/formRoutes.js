const express = require('express')
const router = express()
const Flight = require('../models/formSchema')

router.get('/form',(req,res)=>{
    res.render('form')
})

router.post('/form',(req,res)=>{
    const newFlight = new Flight(req.body)
    // console.log(req.body)
    newFlight.save()
    // res.redirect('/form')
})


module.exports = router