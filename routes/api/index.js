const router = require("express").Router();
const userRoutes = require("./user");
const statsRoutes = require("./stats");

// Book routes
router.use("/user", userRoutes);
router.use("/stats", statsRoutes);

module.exports = router;
