const mongoose = require('mongoose')

const politicaPrivacidadSchema = mongoose.Schema (
    {
        phoneNumber: {
            type: String,
            require: true,
            unique: true
        },
        status: {
            type: Boolean,
            require: true
        }
    },
    {
        timestamps: true
    }
)

const PoliticaPrivacidad = mongoose.model("politicaPrivacidad", politicaPrivacidadSchema)
module.exports = PoliticaPrivacidad