const { Comments } = require("../models");

const commentsData = [
    {
        comment_text: "useless post",
        blogpost_id: 1,
        user_username: "Erikrainer",
    },
    {
        comment_text: "i dont care about that",
        blogpost_id: 2,
        user_username: "Anonymous",
    },
    {
        comment_text: "It would be better to go see Pelé's show.",
        blogpost_id: 3,
        user_username: "RandomPerson",
    },
]

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments;