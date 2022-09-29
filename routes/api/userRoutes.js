const router = require("express").Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addUserThought,
  removeUserThought,
} = require("../../controller/userController");

router.route("/").get(getUser).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/:userId/thought").post(addUserThought);

router.route("/:userId/thought/:thoughtId").delete(removeUserThought);

module.exports = router;
