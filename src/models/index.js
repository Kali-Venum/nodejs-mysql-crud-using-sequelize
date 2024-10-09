const dbConfig = require("../config/db.config");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.NAME,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the DATABASE..!");
  })
  .catch((err) => {
    console.log("Error:- " + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./products.model")(sequelize, DataTypes);
db.reviews = require("./reviews.model")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("DATABASE Tables Sync Done..!");
});

module.exports = db;
