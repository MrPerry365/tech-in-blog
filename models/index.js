// import models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');



// user has many posts
User.hasMany(Post, {
    foreignKey : 'user_id'
});

// user has many comments
// User.hasMany(Comment, {
//     foreignKey : 'user_id',
    
// });

// posts have an author
Post.belongsTo(User, {
    foreignKey : 'user_id',
    
});

// posts have many comments
// Post.hasMany(Comment, {
//     foreignKey : 'post_id',
// });

// comments have an author
// Comment.belongsTo(User, {
//     foreignKey : 'user_id',
    
// });

// comments are attached to a post
// Comment.belongsTo(Post, {
//     foreignKey : 'post_id',
    
// });

module.exports = {User, Post, Comment};