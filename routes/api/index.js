const router = require("express").Router();
const userRoutes = require("./User");
const blogPostRoutes = require("./BlogPost");
const commentsRoutes = require("./Comments");

router.use('/user', userRoutes);
router.use('/blogpost', blogPostRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;