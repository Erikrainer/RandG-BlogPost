const { BlogPost } = require("../models");

const blogPostData = [
    {
        title: "Why MVC is so important",
        text: "MVC allows developers to maintain a true separation of concers, devising their code between the Model layer for data, the View layer for design and the Controller layer for application logic.",
        user_username: "Erikrainer",
    },
    {
        title: "Authentication vs. Authorization",
        text: "There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.",
        user_username: "Anonymous",
    },
    {
        title: "Object-Relational Mapping",
        text: "I have really loved learning about ORMs. It`s really simplified the way i create queries in SQL!",
        user_username: "RandomPerson",
    },
]

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData,  {
    individualHooks: true,
    returning: true,
  });

module.exports = seedBlogPost;