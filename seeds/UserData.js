const { User } = require("../models");

const UserData = [
    {
        username: "Erikrainer",
        password: "123451232",
    },
    {
        username: "Anonymous",
        password: "1234512323",
    },
    {
        username: "RandomPerson",
        password: "12345321321",
    },
]

const seedUser = () => User.bulkCreate(UserData,  {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;