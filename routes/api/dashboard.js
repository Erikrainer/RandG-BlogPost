const router = require('express').Router();
const { BlogPost, User, Comments } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all posts for the logged-in user
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
  
  // Create a new post
  router.post('/create', withAuth, async (req, res) => {
    try {
      const newPost = await BlogPost.create({ 
        title: req.body.title,
        text: req.body.text, 
        // user_username: req.session.username, 
      });
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ error: 'Error creating post' });
    }
  });
  
  // Update an existing post
  router.put('/update/:postId', withAuth, async (req, res) => {
    try {
      const { title, text } = req.body;
      const postId = req.params.postId;
      const post = await BlogPost.findOne({ 
        where: { 
          id: postId, 
          user_username: req.session.username 
        } 
      });
      if (!post) return res.status(404).json({ error: 'Post not found' });
  
      await post.update({ title, text });
      res.status(200).json(post); // Return the updated post
    } catch (error) {
      res.status(400).json({ error: 'Error updating post' });
    }
  });
  

module.exports = router;
