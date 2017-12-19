const
  C = require('../config/constants'),
  conn = require('../config/connection')
module.exports = {
  get: cb => {
    conn.query(`SELECT * FROM users`,(error,results) => {
      cb(error,results)
    })
  }
}