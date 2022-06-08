const mongoose = require("mongoose");

const resourceSchema = mongoose.Schema({
    channel: String,
    type: String,
    cost: String,
    time: String,
    notes: String,
    costNote: String
}, {
    timestamps: true
});

module.exports = mongoose.model("Resource", resourceSchema);