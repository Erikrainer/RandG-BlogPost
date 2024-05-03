const { BlogPost } = require("../models");

const blogPostData = [
    {
        blog_title: "Why MVC is so important",
        blog_text: "MVC allows developers to maintain a true separation of concers, devising their code between the Model layer for data, the View layer for design and the Controller layer for application logic.",
        user_id: 1,
    },
    {
        blog_title: "Authentication vs. Authorization",
        blog_text: "There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.",
        user_id: 2
    },
    {
        blog_title: "Object-Relational Mapping",
        blog_text: "I have really loved learning about ORMs. It`s really simplified the way i create queries in SQL!",
        user_id: 3
    },
]

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;