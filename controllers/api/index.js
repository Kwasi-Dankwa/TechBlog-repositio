const router = require("express").Router();
const userRoutes = require("./user-routes");
const postRoutes = require('./postRoutes.js');
const commentRoutes = require('./commentRoutes.js');

router.use("/", userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;