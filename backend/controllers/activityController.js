const asyncHandler = require("express-async-handler");

const Activity = require("../models/activityModel");

// @desc Get Activities
// @route GET /api/activities
const getActivities = asyncHandler(async (req, res) => {
    const activities = await Activity.find();

    res.status(200).json(activities);
});

// @desc Create Activity
// @route POST /api/activities
const createActivity = asyncHandler(async (req, res) => {
    // if (!req.body.name) {
    //     res.status(400);
    //     throw new Error("Please add a text field.");
    // }

    const activity = await Activity.create({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        neighborhood: req.body.neighborhood,
        address: req.body.address,
        location: req.body.location,
        zip: req.body.zip,
        cost: req.body.cost,
        time: req.body.time
    });

    console.log(activity);


    res.status(200).json(activity);
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