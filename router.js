const passportStrategies = require('./services/passport')
const passport = require('passport')
passport.use(passportStrategies.jwt)
passport.use(passportStrategies.local)

const requireAuth = passport.authenticate('jwt', { session : false })
const requireSignin = passport.authenticate('local', { session : false })
// controllers start
const Authentication = require('./controllers/authentication');
const Company = require('./controllers/company.controller');
// controllers end
module.exports = (app) => {
  app.get("/", function(req, res) {
      return res.sendFile(__dirname + "/your front-end/index.html")
  })
  app.post('/signup', Authentication.signup)
  app.post('/api/v1/auth/sign-in', requireSignin,  Authentication.signin)
  app.get('/health', (req, res) => res.send('I\'m aliveeee !'));
  // company start
  app.get('/company',requireAuth, Company.getCompany);
  
  app.post('/sms', (req, res) => {
    const run = smsParser(req.body.message)
    console.log('id: ', run.id)
    console.log('time: ', run.time)
    res.status(200).send({events: []})
  });
}