const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        id : {
            type : DataType.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
        },

        text : {
            type : DataType.STRING,
            allowNull : false
        },

        author : {
            type : DataType.INTEGER,
            references : {
                model : 'user',
                key : 'id'
            }
        },

        parentPost : {
            type : DataType.INTEGER,
            references : {
                model : 'blogPost',
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