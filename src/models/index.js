const Sequelize = require('sequelize');
const database = require('../config/database.json');

const sequelize = new Sequelize('T-shopping', 'root', '1234', {
  host: database.host,
  dialect: database.dialect,
  timezone: database.timezone,
  logging: database.logging,

  define: database.define
});

const UserM = require('./User');
const User_infoM = require('./User_info');
const CommuniyM = require('./Community');
const ShopM = require('./Shop');

module.exports = {
  User: UserM(sequelize, Sequelize),
  User_info: User_infoM(sequelize, Sequelize),
  Communiy: CommuniyM(sequelize, Sequelize),
  Shop: ShopM(sequelize, Sequelize),
}


sequelize.sync().then(() => {
  console.log('[Model] Databases sync');
}).catch((err) => {
  console.log(err.message);
});