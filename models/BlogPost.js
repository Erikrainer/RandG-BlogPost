const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class BlogPost extends Model {}

BlogPost.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_username: {
        type: DataTypes.STRING,
        references: {
            model: "user",
            key: "username"
        },
    },
},
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogpost',
}
)

module.exports = BlogPost;