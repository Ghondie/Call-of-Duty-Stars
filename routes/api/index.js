const router = require("express").Router();
const userRoutes = require("./user");
const codRoutes = require("./cod");
// const statsRoutes = require("./stats");

// Book routes
router.use("/user", userRoutes);
router.use("/cod", codRoutes);


// router.use("/stats", statsRoutes);

module.exports = router;
