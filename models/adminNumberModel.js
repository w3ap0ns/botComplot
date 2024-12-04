const mongoose = require('mongoose')

const adminNumberSchema = mongoose.Schema (
    {
        phoneNumber: {
            type: String,
            require: true,
            unique: true
        },
        name: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
)

const AdminNumber = mongoose.model("adminNumber", adminNumberSchema)
module.exports = AdminNumber