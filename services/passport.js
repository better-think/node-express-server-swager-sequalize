const User = require('../models/user')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')

const localOptions = {usernameField: 'email' }

const localLogin = new LocalStrategy(localOptions, (login, password, done) => {
  console.log("LocalStrategy");
  User.findOne({where: {email: login}}).then(user => {
    if (!user) return done(null, false)
    user.comparePassword(password, (err, isMatch) => {
      if (err) return done(err);
      if (!isMatch) return done(null, false)
      return done(null, user)
    })
  }).catch(e => done(err))
})

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('token'),
  secretOrKey: config.secret,
}

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  console.log("JwtStrategy1234567890-")
  User.findOne({where: {email: payload.sub}})
    .then(user => user ? done(null, user) : done(null, false))
    .catch(e => done(err, false))
  // User.find(payload.sub)
  //   .then(user => user ? done(null, user) : done(null, false))
  //   .catch(e => done(err, false))
})

module.exports = {
  jwt: jwtLogin,
  local: localLogin
}