const router = require("express").Router();
const {BlogPost, Comments, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req , res) => {
    try{
        const blogPostData = await BlogPost.findAll({
          include: [
            {
                model: User,
                attributes: ["username"],
            },
            {
              model: Comments,
            }
        ]
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
                {
                  model: Comments,
                  include: [{
                    model: User,
                    attributes: ["username"],
                  }]
                }
            ]
        })

        const blogpost = blogPostData.get({ plain: true });

        res.render("blogpost", {
            ...blogpost,
            logged_in: req.session.logged_in
        });
    }catch (error) {
        res.status(500).json(error);
    }
});

  
  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;