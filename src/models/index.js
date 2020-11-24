const Sequelize = require('sequelize');
const database = require('../config/database.json');

const sequelize = new Sequelize('t-server', 'root', '0000', {
  host: database.host,
  dialect: database.dialect,
  timezone: database.timezone,
  logging: database.logging,

  define: database.define
});

const UserM = require('./User');
const InfoM = require('./Info');
const CommuniyM = require('./Community');
const ShopM = require('./Shop');

module.exports = {
  User: UserM(sequelize, Sequelize),
  Info: InfoM(sequelize, Sequelize),
  Communiy: CommuniyM(sequelize, Sequelize),
  Shop: ShopM(sequelize, Sequelize),
}


sequelize.sync().then(() => {
  console.log('[Model] Databases sync');
}).catch((err) => {
  console.log(err.message);
});