// import models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// create relationships

// user has many posts
User.hasMany(Post, {
    foreignKey : 'author'
});

// user has many comments
User.hasMany(Comment, {
    foreignKey : 'author',
    onDelete : 'SET NULL'
});

// posts have an author
Post.belongsTo(User, {
    foreignKey : 'author',
    onDelete : 'SET NULL'
});

// posts have many comments
Post.hasMany(Comment, {
    foreignKey : 'parentPost',
});

// comments have an author
Comment.belongsTo(User, {
    foreignKey : 'author',
    onDelete : 'SET NULL'
});

// comments are attached to a post
Comment.belongsTo(Post, {
    foreignKey : 'parentPost',
    onDelete : 'SET NULL'
});

module.exports = {User, Post, Comment};