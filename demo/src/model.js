// 10. import db, DataTypes and Model from connection.js
const { db, DataTypes, Model } = require("../db/connection.js");

// 11. create a pokemon class, extending the model class
class Pokemon extends Model {}

// 12. run Pokemon.init() passing in the schema object and the connection object
Pokemon.init(
  {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    weight: DataTypes.DECIMAL(10, 2),
  },
  {
    sequelize: db,
    modelName: "Pokemon",
  }
);

// 13. export Pokemon
module.exports = Pokemon;