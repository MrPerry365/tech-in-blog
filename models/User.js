const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

//define user model
class User extends Model {
    authenticate(userPwd) {
        return bcrypt.compareSync(userPwd, this.password);
    }
}

User.init(

    {
        id: {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
        },

        // user name, string
        userName: {
             type : DataTypes.STRING,
             allowNull : false,
        },

        password: {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                // min 8 word characters
                is : /^[a-z0-9-]{3,15}$/
            },
        },

        // email address, string
        emailAddress: {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                isEmail : true  //use sequelize built in validator for email address
            }
        }
    },

    {
        hooks : {
        // create new user, hash password and store
        async beforeCreate(user) {
            user.password = await bcrypt.hash(user.password, 10)
            return user;
        },

        // update user password, hash and store
        async beforeUpdate(user) {
            user.password = await bcrypt.hash(user.pass, 10)
            return user;
        }
    },
    
    sequelize,
    freezeTableName : true,
    modelName : 'user'
    }
);

module.exports = User;