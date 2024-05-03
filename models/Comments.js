const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");


class Comments extends Model {}

Comments.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    blogpost_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "blogpost",
            key: "id",
        }
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
})



module.exports = Comments;