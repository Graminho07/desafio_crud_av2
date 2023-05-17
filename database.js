const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'root', '130396LGV', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;