const asyncHandler = require("express-async-handler");

const Activity = require("../models/activityModel");

// @desc Get Activities
// @route GET /api/activities
const getActivities = asyncHandler(async (req, res) => {

    const activities = await Activity.find(req.query);

    res.status(200).json(activities);
});

// @desc Create Activity
// @route POST /api/activities
const createActivity = asyncHandler(async (req, res) => {
    if (!req.body.name) {
        res.status(400);
        throw new Error("Please add a text field.");
    }

    const activity = await Activity.create({
        name: req.body.name,
        description: req.body.description,
        location: req.body.location,
        zip: req.body.zip,
        region: req.body.region,
        cost: req.body.cost,
        when: req.body.when,
        phone: req.body.phone,
        site: req.body.site,
        email: req.body.email,
        scheduled: req.body.scheduled,
        setting: req.body.setting
    });

    console.log(activity);


    res.status(200).json(activity);
});

// @desc Update Activity
// @route PUT /api/activities/:id
const updateActivity = asyncHandler(async (req, res) => {
    const activity = await Activity.findById(req.params.id)

    if (!activity) {
        res.status(400);
        throw new Error("Activity not found");
    };

    const updatedActivity = await Activity.findByIdAndUpdate(req.params.id, req.body, {new: true});

    res.status(200).json(updatedActivity);
});

// @desc Delete Activity
// @route DELETE /api/activities/:id
const deleteActivity = asyncHandler(async (req, res) => {
    const activity = await Activity.findById(req.params.id)

    if (!activity) {
        res.status(400);
        throw new Error("Activity not found");
    };

    await activity.remove();

    res.status(200).json({id: req.params.id});
});

module.exports = {
    getActivities, createActivity, updateActivity, deleteActivity
};