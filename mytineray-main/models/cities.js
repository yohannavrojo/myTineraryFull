const mongoose = require("mongoose") // va a almacenar los datos de las ciudades "cities"
const citiesSchema = new mongoose.Schema ({
    name:{type:String,require:true},
    country:{type:String,require:true},
    description:{type:String,require:true},
    currency:{type:String,require:true},
    language:{type:String,require:true},
    continents:{type:String,require:true},
    region:{type:String,require:true},
    denomination:{type:String,require:true},
    img:{type:String,require:true},
    
    
})

const City = mongoose.model("Cities",citiesSchema)

module.exports = City;