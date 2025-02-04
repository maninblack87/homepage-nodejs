const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        id : {            
            type: String,
            required: true,
            unique: true
        },
        password : {
            type: String,
            required: true
        },
        telephone:{
            type: String,
            required: true,
        },
        email:{
            type:String,
        }
    }
)

module.exports = mongoose.model("User", userSchema);