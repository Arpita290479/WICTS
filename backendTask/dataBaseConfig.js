const mysql = require('mysql')

let connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: "Arpita1234!",
    database:'customer-product'
})

module.exports = connection




