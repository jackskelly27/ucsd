const asyncHandler = require("express-async-handler");

// @desc Get Activities
// @route GET /api/activities
const getActivities = asyncHandler(async (req, res) => {
    res.status(200).json({message : "Get Activities"});
});

// @desc Create Activity
// @route POST /api/activities
const createActivity = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please add a text field.");
    }
    res.status(200).json({message: "Create Activity"});
});

// @desc Update Activity
// @route PUT /api/activities/:id
const updateActivity = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Change Activity ${req.params.id}`});
});

// @desc Delete Activity
// @route DELETE /api/activities/:id
const deleteActivity = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete Activity ${req.params.id}`});
});

module.exports = {
    getActivities, createActivity, updateActivity, deleteActivity
};