const express = require('express')
const dotenv = require('dotenv')
dotenv.config({
    path:'./.env'
})
const cors = require('cors')
const db = require('./dataBaseConfig')
const customerRoutes = require('./routes/customerRoute')
const productRoutes = require('./routes/productRoute')
let app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))
let hostname = '127.0.0.1'

let customerTableQuery = `
CREATE TABLE  if not exists customer (
  id INT NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(255) NULL,
  email VARCHAR(255) NULL,
  number VARCHAR(255) NULL,
  payment_dues VARCHAR(255) NULL,
  address VARCHAR(255) NULL,
  PRIMARY KEY (id));
`
db.query(customerTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("customer table is craeted")
    }
})
let productTableQuery = `
CREATE TABLE  if not exists product (
  id INT NOT NULL AUTO_INCREMENT,
  brand VARCHAR(255) NULL,
  price VARCHAR(255) NULL,
  category VARCHAR(255) NULL,
  rating VARCHAR(255) NULL,
  image VARCHAR(255) NULL,
  PRIMARY KEY (id));
`
db.query(productTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("product table is craeted")
    }
})
let productCategoryTableQuery = `
CREATE TABLE  if not exists productCategory (
  id INT NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(255) NULL,
  category_discription VARCHAR(255) NULL,
  PRIMARY KEY (id));
`
db.query(productCategoryTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("productCategory table is craeted")
    }
})

app.use('/api', customerRoutes)
app.use('/api', productRoutes)

app.listen(process.env.PORT, hostname , ()=>{
    console.log(`😃server is running at http://${hostname}:${process.env.PORT}/api/`)
})
