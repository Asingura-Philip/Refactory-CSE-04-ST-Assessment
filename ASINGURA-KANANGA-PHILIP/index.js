const express = require('express')
const path = require('path')
const app = express()

const port = 4500



app.set('view engine',"pug")



app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})