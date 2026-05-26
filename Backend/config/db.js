const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'proyectodb',
  'root',
  'root123',
  {
    host: 'mysql',
    dialect: 'mysql'
  }
);

module.exports = sequelize;