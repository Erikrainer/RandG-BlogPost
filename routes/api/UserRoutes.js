const router = require("express").Router();
const { User } = require("../../models");

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.username = userData.username;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json({ error: "Failed to create user." });
    }
});

router.post("/login", async (req, res) => {
    try {
        const userData = await User.findOne({ // Corrected method name
            where: {
                username: req.body.username,
            },
        });
        if (!userData) {
            return res.status(400).json({ error: "User not found." });
        }

        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            return res.status(400).json({ error: "Incorrect password." });
        }

        req.session.save(() => {
            req.session.username = userData.username;
            req.session.logged_in = true;
            res.json({
                user: userData,
                message: "You are now logged in!!",
            });
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error." });
    }
});

router.post("/logout", (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).json({ error: "No session found." });
    }
});

module.exports = router;
