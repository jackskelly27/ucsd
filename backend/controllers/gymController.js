const asyncHandler = require("express-async-handler");

const Gym = require("../models/gymModel");

// @desc Get Gyms
// @route GET /api/gyms
const getGyms = asyncHandler(async (req, res) => {

    const gyms = await Gym.find(req.query);

    res.status(200).json(gyms);
});

// @desc Create Gyms
// @route POST /api/gyms
const createGym = asyncHandler(async (req, res) => {
    if (!req.body.gym) {
        res.status(400);
        throw new Error("Please add a text field.");
    }

    const gym = await Gym.create({
        gym: req.body.gym,
        name: req.body.name,
        address: req.body.address,
        zip: req.body.zip,
        region: req.body.region,
        phone: req.body.phone,
        site: req.body.site
    });

    console.log(gym);


    res.status(200).json(gym);
});

// @desc Update Gym
// @route PUT /api/gyms/:id
const updateGym = asyncHandler(async (req, res) => {
    const gym = await Gym.findById(req.params.id)

    if (!gym) {
        res.status(400);
        throw new Error("Gym not found");
    };

    const updatedGym = await Gym.findByIdAndUpdate(req.params.id, req.body, {new: true});

    res.status(200).json(updatedGym);
});

// @desc Delete Gym
// @route DELETE /api/gyms/:id
const deleteGym = asyncHandler(async (req, res) => {
    const gym = await Gym.findById(req.params.id)

    if (!gym) {
        res.status(400);
        throw new Error("Gym not found");
    };

    await gym.remove();

    res.status(200).json({id: req.params.id});
});

module.exports = {
    getGyms, createGym, updateGym, deleteGym
};