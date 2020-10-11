const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const app = express()
const {swaggerDocument} = require('./swagger/swaggerDocument ');
const router = require('./router')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({ origin: '*' }))
app.use(morgan('combined'))
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

router(app)

// app.listen(80, () => console.log('Listening port=%s....', 80))
app.listen(process.env.PORT || 3000, () => console.log('Listening port=%s....', process.env.PORT || 3000))