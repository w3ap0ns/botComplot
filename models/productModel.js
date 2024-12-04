const mongoose = require('mongoose')

const productSchema = mongoose.Schema (
    {
        name: {
            type: String,
            require: true,
            unique: true
        },
        price: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product", productSchema)
module.exports = Product