const mongoose = require("mongoose");

const gymSchema = mongoose.Schema({
    gym: String,
    name: String,
    address: String,
    zip: String,
    neighborhood: String,
    phone: String
}, {
    timestamps: true
});

module.exports = mongoose.model("Gym", gymSchema);