const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
    name: String,
    type: String,
    description: String,
    neighborhood: String,
    address: String,
    location: String,
    zip: String,
    cost: Number,
    time: String
}, {
    timestamps: true
});

module.exports = mongoose.model("Activity", activitySchema);