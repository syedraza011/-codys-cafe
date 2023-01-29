const Sequelize = require("sequelize");
const db = require("./database");

const Coffee = db.define("coffee", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ingredients: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
});

module.exports = Coffee;
