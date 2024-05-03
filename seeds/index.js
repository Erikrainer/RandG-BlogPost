const sequelize = require("../config/connection");
const seedBlogPost = require("./BlogPost");

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedBlogPost();

    process.exit(0);
};

seedAll();