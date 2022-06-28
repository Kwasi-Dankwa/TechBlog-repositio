const { User } = require('../models');

const userdata =
[
  {
    "username": "Kane",
    "password": "password"
  },
  {
    "username": "Roman",
    "password": "password"
  },
  {
    "username": "Tekno",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;