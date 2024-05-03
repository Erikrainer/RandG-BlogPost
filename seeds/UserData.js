const { User } = require("../models");

const UserData = [
    {
        username: "Erikrainer",
        password: "12345",
    },
    {
        username: "Anonymous",
        password: "12345",
    },
    {
        username: "RandomPerson",
        password: "12345",
    },
]

const seedUser = () => User.bulkCreate(UserData);

module.exports = seedUser;