const mongoose = require('mongoose')

const flightSchema = new mongoose.Schema({
    fullname:{
        type:String,
        
    },
    gender:{
        type:String,
        
    },
    DOB:{
        type:String,
        
    },
    nationality:{
        type:String,
        
    },
    contact:{
        type:String,
        
    },
    email:{
        type:String,
        
    },
    POBox:{
        type:String,
        
    },
    econtact:{
        type:String,
        
    },
    passport:{
        type:String,
        
    },
    visa:{
        type:String,
        
    },
    departureCity:{
        type:String,
        
    },
    destinationCity:{
        type:String,
        
    },

})

module.exports = mongoose.model('Flight', flightSchema)