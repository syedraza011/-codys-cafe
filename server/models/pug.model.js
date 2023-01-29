const Sequelize = require('sequelize')
const db = require('./database')
const Coffee = require('./coffee.model')

const Pug = db.define('pugs', {
  // your code here
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
})

module.exports = Pug
