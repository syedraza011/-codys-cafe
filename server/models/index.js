const db = require('./database')
const Pug = require('./pug.model')
const Coffee = require('./coffee.model')

// VVV assign relations below VVV //
Pug.belongsToMany(Pug, { as: 'friends', through: 'pug_friends' });


Pug.belongsTo(Coffee, { as: 'favoriteCoffee' })
Coffee.hasMany(Pug, { foreignKey: 'favoriteCoffeeId' })

// ^^^ assign relations above ^^^ //

module.exports = {
  db,
  Pug,
  Coffee
}
