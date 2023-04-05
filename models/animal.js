const { mongoose } = require('../db/connection');

const animalsSchema = new mongoose.Schema({
    species: String,
    location: String,
    extinct: Boolean,
    lifeExpectancy: Number,
}, {timestamps: true})

const Animals = mongoose.model('Animal', animalsSchema)

module.exports = Animal