const asyncHandler = require("express-async-handler");

const Resource = require("../models/resourceModel");

// @desc Get Digital Resources
// @route GET /api/resources
const getResources = asyncHandler(async (req, res) => {

    const resources = await Resource.find(req.query);

    res.status(200).json(resources);
});

// @desc Create Resources
// @route POST /api/resources
const createResource = asyncHandler(async (req, res) => {
    if (!req.body.channel) {
        res.status(400);
        throw new Error("Please add a text field.");
    }
    
    const resource = await Resource.create({
        channel: req.body.channel,
        type: req.body.type,
        cost: req.body.cost,
        time: req.body.time,
        notes: req.body.notes,
        costNote: req.body.costNote
    });

    console.log(resource);


    res.status(200).json(resource);
});

// @desc Update Resource
// @route PUT /api/resources/:id
const updateResource = asyncHandler(async (req, res) => {
    const resource = await Resource.findById(req.params.id)

    if (!resource) {
        res.status(400);
        throw new Error("Resource not found");
    };

    const updatedResource = await Resource.findByIdAndUpdate(req.params.id, req.body, {new: true});

    res.status(200).json(updatedResource);
});

// @desc Delete Resource
// @route DELETE /api/resources/:id
const deleteResource = asyncHandler(async (req, res) => {
    const resource = await Resource.findById(req.params.id)

    if (!resource) {
        res.status(400);
        throw new Error("Resource not found");
    };

    await resource.remove();

    res.status(200).json({id: req.params.id});
});

module.exports = {
    getResources, createResource, updateResource, deleteResource
};