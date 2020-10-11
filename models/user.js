const bcrypt = require('bcrypt-nodejs');
const Sequelize = require('sequelize');
const DB = require('../config/db.config');
var sequelize = new Sequelize('DB name', 'root', '', {
  host: "localhost",
  port: 3306,
  dialect: "mysql"
})
// const sequelize = new Sequelize(`mysql://funding_user:qwe12345@localhost/fundingt_funding`);

const userSchema = {
  email: {
  	type: Sequelize.TEXT,
  	primaryKey: true
  },
  encrypted: Sequelize.TEXT,
  id: {
    type: Sequelize.INTEGER,
  	primaryKey: true
  },
  company_id: Sequelize.TEXT,
  username: Sequelize.TEXT,
  encrypted: Sequelize.TEXT,          
  salt: Sequelize.TEXT,
  name_first: Sequelize.TEXT,
  name_last: Sequelize.TEXT,    
  position: Sequelize.TEXT,        
  phone: Sequelize.TEXT, 
  fax: Sequelize.TEXT,   
  type: Sequelize.TEXT,  
  sec_manager: Sequelize.TEXT,  
  sec_sales: Sequelize.TEXT,  
  sec_admin: Sequelize.TEXT, 
  sec_service: Sequelize.TEXT, 
  sec_support: Sequelize.TEXT,  
  sec_vendor: Sequelize.TEXT,
  active: Sequelize.TEXT,  
}

const User = sequelize.define('users', userSchema,{
  timestamps: false,
  hooks: {
  	beforeCreate: (user, options) => {
      console.log("beforeCreate")
  	  return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) { reject(err) }
          console.log(salt, "asdfghjkl")
          return bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) { reject(err) }
              user.password = hash
              resolve()
          })
        })
      })
  	}
  }
})

User.prototype.comparePassword = function (candidatePassword, callback) {
  /**
   * @param{encrypted is a field of}
   */
  bcrypt.compare(candidatePassword, this.encrypted, (err, isMatch) => {
    if (err) return callback(err)
    callback(null, isMatch)
  })
}
module.exports = User
