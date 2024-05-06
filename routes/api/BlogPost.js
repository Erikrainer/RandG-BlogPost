const router = require("express").Router();

const { BlogPost } = require("../../models");

const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res ) => {
    try{
        const newBlogPost = await BlogPost.create({
            ...req.body,
            username: req.session.username,
        });
        res.status(200).json(newBlogPost);
    }catch(error){
        res.status(500).json(error);
    }
});

router.delete("/:id", withAuth, async (req, res) => {
    try{
        const blogPostData = await BlogPost.destroy({
            where: {
                id: req.params.id,
                username: req.session.username,
            },
        });
        if(!blogPostData) {
            res.status(404).json({
                message: "No post found with this id!!"
            })
            return;
        }
        res.status(200).json(blogPostData);
    }catch(error){
        res.status(500).json(error);
    }
});

module.exports = router;