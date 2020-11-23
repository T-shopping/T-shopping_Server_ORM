const Sequelize = require('sequelize');
const database = require('../config/database.json');

const sequelize = new Sequelize('T-shopping', 'root', '1234', {
  host: database.host,
  dialect: database.dialect,
  timezone: database.timezone,
  logging: database.logging,

  define: database.define
});



module.exports = {
  
}


sequelize.sync().then(() => {
  console.log('[Model] Databases sync');
}).catch((err) => {
  console.log(err.message);
});