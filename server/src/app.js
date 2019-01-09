process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const express = require('./config/express')
const config = require('./config/env/config')
const { sequelize } = require('./app/models')
const app = express()

sequelize.sync({ force: false })
  .then(() => {
    app.listen(config.port)
    console.log('Server running at http://localhost:' + config.port)
  })

module.exports = app