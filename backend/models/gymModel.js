const mongoose = require("mongoose");

const gymSchema = mongoose.Schema({
    gym: String,
    name: String,
    address: String,
    zip: String,
    region: String,
    phone: String,
    site: String
}, {
    timestamps: true
});

module.exports = mongoose.model("Gym", gymSchema);