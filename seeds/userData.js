const { User } = require('../models');

const userdata =
[
  {
    "username": "Kane",
    "email": "kt3@imdb.com",
    "password": "password123"
  },
  {
    "username": "Roman",
    "email": "romback@gmail.com",
    "password": "password123"
  },
  {
    "username": "Tekno",
    "email": "Tk0nan@gmail.com",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;