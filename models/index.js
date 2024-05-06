const User = require("./User");
const BlogPost = require("./BlogPost");
const Comments = require("./Comments");

User.hasMany(BlogPost, {
    foreignKey: "username",
    onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
    foreignKey: "username",
});

BlogPost.hasMany(Comments, {
    foreignKey: "blogpost_id",
    onDelete: 'CASCADE'
});

Comments.belongsTo(BlogPost, {
    foreignKey: "blogpost_id",
});

User.hasMany(Comments, {
    foreignKey: "username",
    onDelete: 'CASCADE'
});

Comments.belongsTo(User, {
    foreignKey: "username",
});

module.exports = { 
    User, 
    BlogPost, 
    Comments,
};