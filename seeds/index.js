const sequelize = require("../config/connection");
const seedBlogPost = require("./BlogPostData");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUser(); 
    console.log('\n----- USER SEEDED -----\n');

    await seedBlogPost();
    console.log('\n----- BlogPost SEEDED -----\n');

    process.exit(0);
};

seedAll();