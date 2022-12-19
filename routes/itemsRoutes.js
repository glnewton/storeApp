const express = require("express");
const router = express.Router();

// Require controller modules.
const item_controller = require("../controllers/itemsController");

/// ITEM ROUTES ///

// INDEX -- GET request for list of all Items.
router.get("/items", item_controller.item_list);
// NEW -- GET request for creating Item. NOTE This must come before route for id (i.e. display item).
router.get("/items/new", item_controller.item_create_get);
// DELETE -- POST request to delete Item.
router.post("/items/:id/delete", item_controller.item_delete_post);
// UPDATE -- POST request to update Item.
router.post("/items/:id/update", item_controller.item_update_post);
// CREATE -- POST request for creating Item.
router.post("/items/create", item_controller.item_create_post);
// EDIT -- GET request to update Item.
router.get("/items/:id/edit", item_controller.item_edit_get);
// SHOW -- GET request for one Item.
router.get("/items/:id", item_controller.item_detail);
// SEED -- GET request for seeding Items.
router.get("/items/seed", item_controller.item_seed);

//module.exports = router;
