const router = require("express").Router();
const { getUser } = require("../controller/userController");
const apiRoutes = require("./api");

//instructing router to use /api routes
router.use("/api", apiRoutes);
console.log(getUser);
console.log(apiRoutes);

router.use((req, res) => {
  return res.send("Wrong route!");
});

module.exports = router;
