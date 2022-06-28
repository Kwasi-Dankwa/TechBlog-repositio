const router = require('express').Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');

// ALL POSTS DASHBOARD
router.get('/', withAuth, async (req, res) => {
  try {
    // store the results of the db query  should use something that "finds all" from the Post model.
     const postData = await Post.findAll({
      where:{"userId": req.session.userId},
      include: [User]
    });
    // this sanitizes the data we just got from the db above (you have to create the above)
    const posts = postData.map((post) => post.get({ plain: true }));
console.log(posts);
    // fill in the view to be rendered
    res.render('all-posts', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

// after clicking on the post button
router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    // get some data passed via the request body
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      // serializing the data
      const post = postData.get({ plain: true });
      console.log(post);
      res.render('edit-post', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;