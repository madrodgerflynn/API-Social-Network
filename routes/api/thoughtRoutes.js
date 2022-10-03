const router = require("express").Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  // addThoughtResponse,
  // removeThoughtResponse,
} = require("../../controller/thoughtController");

router.route("/").get(getThought).post(createThought);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// router.route("/:thoughtId/reactions").post(addThoughtResponse);

// router.route("/:thoughtId/reactions/:reactionId").delete(removeThoughtResponse);

module.exports = router;
