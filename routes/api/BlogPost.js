const router = require('express').Router();
const { BlogPost, User, Comments } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      const blogPostData = await BlogPost.findAll({ 
        where: { 
          user_username: req.session.username 
        }, 
        include: [
          {
              model: User,
              attributes: ["username"],
          },
          {
            model: Comments,
          },
      ]
    });
    const blogposts = blogPostData.map((blogpost) => blogpost.get({ plain: true}));

      res.render('dashboard', { 
        blogposts,
        logged_in: req.session.logged_in,
        username: req.session.username
      }); // Render dashboard view with posts data
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

router.post("/create", withAuth, async (req, res ) => {
    try{
        const newBlogPost = await BlogPost.create({
            ...req.body,
            user_username: req.session.username,
        });
        res.status(200).json(newBlogPost);
    }catch(error){
        res.status(500).json(error);
    }
});

router.put('/update/:id', withAuth, async (req, res) => {
    try {
        const post = await BlogPost.findOne({
          where: {
           id: req.params.id
          },
        });

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }

        // Update the post with new title and text
        await post.update({ 
          title: req.body.title,
          text: req.body.text,
        });

        // Return the updated post
        res.status(200).json(post);
    } catch (error) {
        // If an error occurs, return a 400 response
        res.status(400).json({ error: 'Error updating post' });
    }
});

router.get('/edit/:postId', (req, res) => {
  const postId = req.params.postId;
  // Render the edit-post handlebars template and pass the postId to the template
  res.render('edit-post', { postId });
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