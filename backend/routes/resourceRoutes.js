const express = require("express");
const router = express.Router();
const {getResources, createResource, updateResource, deleteResource} = require("../controllers/resourceController");

router.route("/").get(getResources).post(createResource);

router.route("/:id").put(updateResource).delete(deleteResource);

//Testing on new computer

module.exports = router;