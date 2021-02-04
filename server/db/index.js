const Sequelize = require("sequelize");

const Connection = new Sequelize("credentials", process.env.DB_USER, process.env.DB_PASSWORD, {
   dialect: "mysql",
   host: process.env.DB_HOST,
   port: 3306,
   logging: console.log,
   define: {}   // extra options can go here
});

const User = Connection.define('users', require("../model/user").attributes, {});

module.exports = {
   User,
   Connection
}
