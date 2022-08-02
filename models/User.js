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
        // primary key, numeric
        id: {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
        },

        // user name, string
        loginName: {
             type : DataTypes.STRING,
             allowNull : false,
        },

        password: {
            type : DataType.STRING,
            allowNull : false,
            validate : {
                // min 8 word characters
                is : /^\w{8,}+$/i
            }
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
        // hooks
        
    }
)