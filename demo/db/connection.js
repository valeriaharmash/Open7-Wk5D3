// 7. import Sequelize, DataTypes and Model from the sequelize library, and path from the path library
const { Sequelize, DataTypes, Model } = require("sequelize");
const path = require("path");

// 8. create a new Sequelize instance and save it to a db constant, using path.join for the storage
const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
});

// 9. export db, DataTypes and Model
module.exports = {
  db,
  DataTypes,
  Model,
};