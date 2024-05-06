const router = require("express").Router();
const {BlogPost, Comments, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req , res) => {
    try{
        const blogPostData = await BlogPost.findAll({
            incluide:[{
                model: User,
                attirbutes: ['username'],
            }],
        })
        const blogposts = blogPostData.map((blogpost) => blogpost.get({ plain: true}));

        res.render("homepage", {
         blogposts,
         logged_in: req.session.logged_in
        });
    }catch (error) {
        res.status(500).json(error);
    }
});

router.get("/blogpost/:id", async (req,res) => {
    try{
        const blogPostData = await BlogPost.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ["username"],
                },
            ]
        })

        const blogposts = blogPostData.get({ plain: true });

        res.render("blogpost", {
            ...blogposts,
            logged_in: req.session.logged_in
        });
    }catch (error) {
        res.status(500).json(error);
    }
});


router.get('/profile', withAuth, async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: BlogPost }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;