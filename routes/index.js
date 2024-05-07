const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require("./homeRoutes");
const dashboard = require("./api/dashboard");

router.use("/", homeRoutes);
router.use('/api', apiRoutes);
router.use("/dashboard", dashboard)

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;