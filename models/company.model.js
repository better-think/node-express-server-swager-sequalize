const Sequelize = require('sequelize');
const DB = require('../config/db.config');
var sequelize = new Sequelize('DB name', 'root', '', {
  host: "localhost",
  port: 3306,
  dialect: "mysql"
})
const userSchema = {
  id: {
    type: Sequelize.INTEGER,
  	primaryKey: true
  },
  name: Sequelize.TEXT,
  contact: Sequelize.TEXT,
  address1: Sequelize.TEXT,
  address2: Sequelize.TEXT,
  city: Sequelize.TEXT,
  state: Sequelize.TEXT,
  zip: Sequelize.TEXT,
  phone_main: Sequelize.TEXT,
  phone_contact: Sequelize.TEXT,
  phone_fax: Sequelize.TEXT,
  website: Sequelize.TEXT,
  referred_by: Sequelize.TEXT,
  active: Sequelize.TEXT,
  last_login: Sequelize.TEXT,
  username: Sequelize.TEXT,
}

const Company = sequelize.define('company', userSchema,{
  timestamps: false,
  hooks: {},
  freezeTableName: true
});


module.exports = Company
