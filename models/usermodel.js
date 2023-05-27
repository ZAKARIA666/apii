const mongoose = require ("mongoose")
const model = mongoose.Schema({

    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});


module.exports = mongoose.model("User",model);