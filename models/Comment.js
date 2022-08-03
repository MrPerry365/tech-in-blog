const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
        },

        text : {
            type : DataTypes.STRING,
            allowNull : false
        },

        author : {
            type : DataTypes.INTEGER,
            references : {
                model : 'user',
                key : 'id'
            }
        },

        parentPost : {
            type : DataTypes.INTEGER,
            references : {
                model : 'Post',
                key : 'id'
            }
        }
    },

    {
        sequelize,
        freezeTableName : true,
        model : 'comment'
    }
);

module.export = Comment;