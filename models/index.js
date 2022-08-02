// import models
const BlogPost = require('./BlogPost');
const User = require('./User');
const Comment = require('./Comment');

// create relationships

// user has many blogposts
User.hasMany(BlogPost, {
    foreignKey : 'author'
});

// user has many comments
User.hasMany(Comment, {
    foreignKey : 'author',
    onDelete : 'SET NULL'
});

// blogposts have an author
BlogPost.belongsTo(User, {
    foreignKey : 'author',
    onDelete : 'SET NULL'
});

// blogposts have many comments
BlogPost.hasMany(Comment, {
    foreignKey : 'parentPost',
});

// comments have an author
Comment.belongsTo(User, {
    foreignKey : 'author',
    onDelete : 'SET NULL'
});

// comments are attached to a blogpost
Comment.belongsTo(BlogPost, {
    foreignKey : 'parentPost',
    onDelete : 'SET NULL'
});

module.exports = {User, BlogPost, Comment};