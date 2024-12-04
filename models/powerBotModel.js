const mongoose = require('mongoose')

const powerBotSchema = mongoose.Schema (
    {
        status: {
            type: Boolean,
            require: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
)

const PowerBot = mongoose.model("powerbot", powerBotSchema)
module.exports = PowerBot