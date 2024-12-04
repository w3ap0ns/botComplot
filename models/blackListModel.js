const mongoose = require('mongoose')

const blackListSchema = mongoose.Schema (
    {
        phoneNumber: {
            type: String,
            require: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
)

const BlackList = mongoose.model("blackList", blackListSchema)
module.exports = BlackList