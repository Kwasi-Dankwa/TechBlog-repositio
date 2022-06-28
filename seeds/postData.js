const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "The Weeknd Tour",
    "postContent": "This tour is going to be amazing",
    "userId": 1
  },
  {
    "postTitle": "Global Warming",
    "postContent": "Ice Caps keep on melting",
    "userId": 2
  },
  {
    "postTitle": "Honestly, Nevermind",
    "postContent": "Drakes latest album received mixed receptions!",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;