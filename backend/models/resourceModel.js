const mongoose = require("mongoose");

const resourceSchema = mongoose.Schema({
    channel: String,
    type: String,
    cost: Number,
    time: String,
    notes: String
}, {
    timestamps: true
});

module.exports = mongoose.model("Resource", resourceSchema);