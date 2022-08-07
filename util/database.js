const Sequelize = require('sequelize');

const sequelize = new Sequelize('freedb_shop_db', 'freedb_pouya', '5yAvgYNzP$cnvH7', {
  dialect: 'mysql',
  host: 'sql.freedb.tech'
});

module.exports = sequelize;
