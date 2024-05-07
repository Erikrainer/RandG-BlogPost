const router = require("express").Router();

const { Comments } = require("../../models");

const withAuth = require("../../utils/auth");

router.post("/create", withAuth, async (req,res) => {
        try{           
            const newComment = await Comments.create({
                comment_text: req.body.comment_text,
                blogpost_id: req.body.blogpostId,
                user_username: req.session.username,
            });
            res.status(200).json(newComment);
        }catch(error){
        res.status(500).json(error);
    }
});

router.delete("/:id", withAuth, async (req,res)=> {
    try{
    const commentData = await Comments.destroy({
        where: {
            id: req.params.id,
            username: req.session.username,
        },
    });
    if(!commentData) {
        res.status(404).json({
            message: "No comment found with this id!!"
        });
        return;
    }
    res.status(200).json(commentData);
}catch(error){
    res.status(500).json(error);
}
});

module.exports = router;