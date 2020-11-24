const Sequelize = require('sequelize');
const database = require('../config/database.json');

const sequelize = new Sequelize('t-shopping', 'root', '1234', {
  host: database.host,
  dialect: database.dialect,
  timezone: database.timezone,
  logging: database.logging,

  define: database.define
});

const UserM = require('./User');
const InfoM = require('./Info');
const CommunityM = require('./Community');
const ShopM = require('./Shop');

module.exports = {
  User: UserM(sequelize, Sequelize),
  Info: InfoM(sequelize, Sequelize),
  Community: CommunityM(sequelize, Sequelize),
  Shop: ShopM(sequelize, Sequelize),
}


sequelize.sync().then(() => {
  console.log('[Model] Databases sync');
}).catch((err) => {
  console.log(err.message);
});