const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require("./homeRoutes");
const blogPostRoutes = require("./api/BlogPost");
const commentsRoutes = require("./api/Comments");

router.use("/", homeRoutes);
router.use('/api', apiRoutes);
router.use('/blogpost', blogPostRoutes);
router.use("/comments", commentsRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;