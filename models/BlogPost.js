const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model { }

BlogPost.init(
    {
        // primary key, numeric ID
        id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
        },

        // title, string
        title : {
            type : DataType.STRING,
            allowNull : false
        },

        // blog body text
        text : {
            type : DataType.STRING,
            allowNull : false
        },

        //blog post author, ref user model
        author : {
            type : DataType.INTEGER,
            references : {
                model : 'user',
                key : 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName : true,
        modelName : 'blogPost'
    }
);

module.exports = BlogPost;