const seedBlogPost = require("./BlogPostData");
const seedUser = require("./UserData");
const seedComments = require("./CommentsData");

const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUser(); 
    console.log('\n----- USER SEEDED -----\n');

    await seedBlogPost();
    console.log('\n----- BLOGPOST SEEDED -----\n');

    await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
};

seedAll();