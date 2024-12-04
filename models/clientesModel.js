const mongoose = require('mongoose')

const clientesSchema = mongoose.Schema (
    {
        phoneNumber: {
            type: String,
            require: true,
            unique: true
        },
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
)

const Clientes = mongoose.model("clientes", clientesSchema)
module.exports = Clientes