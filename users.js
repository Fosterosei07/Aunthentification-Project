const dbConnect = require('./dbConnect')
const {DataTypes, Sequelize} = require('sequelize')

const User = dbConnect.define('users', 
{
    id: {
        primaryKey:true,
        autoIncrement: true,
        type:DataTypes.INTEGER
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})
User.sync({ alter: true});
module.exports = User;