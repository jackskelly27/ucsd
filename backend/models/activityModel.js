const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
    name: { type: String, required: true},
    type: String,
    description: String,
    neighborhood: String,
    address: String,
    location: String,
    zip: Number,
    cost: String,
    time: String
}, {
    timestamps: true
});

module.exports = mongoose.model("Activity", activitySchema);