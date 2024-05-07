const router = require("express").Router();
const userRoutes = require("./UserRoutes");
const commentsRoutes = require("./Comments");


router.use('/users', userRoutes);
router.use('/comments', commentsRoutes);


module.exports = router;