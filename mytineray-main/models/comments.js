const mongoose = require("mongoose") // va a almacenar los datos de las ciudades cities

const commentsSchema = new mongoose.Schema ({
    itinerario: {type:mongoose.Types.ObjectId, ref:"itinerary", require:true},
    user: {type:mongoose.Types.ObjectId, ref:"users", require:true},
    comment:{type:String,require:true},
    
    
   
})

const Comments = mongoose.model("comments",commentsSchema)

module.exports = Comments