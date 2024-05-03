const router = require("express").Router();
const userRoutes = require("./UserRoutes");
const blogPostRoutes = require("./BlogPost");
const commentsRoutes = require("./Comments");

router.use('/users', userRoutes);
router.use('/blogpost', blogPostRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;