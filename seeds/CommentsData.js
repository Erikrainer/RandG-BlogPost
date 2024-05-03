const { Comments } = require("../models");

const commentsData = [
    {
        comment_text: "useless post",
        blogpost_id: 1,
    },
    {
        comment_text: "i dont care about that",
        blogpost_id: 2,
    },
    {
        comment_text: "It would be better to go see Pelé's show.",
        blogpost_id: 3,
    },
]

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments;