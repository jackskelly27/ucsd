const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
    name: String,
    description: String,
    location: String,
    zip: String,
    region: String,
    cost: String,
    when: String,
    phone: String,
    site: String,
    email: String,
    scheduled: String,
    setting: String,
    costNote: String
}, {
    timestamps: true
});

module.exports = mongoose.model("Activity", activitySchema);