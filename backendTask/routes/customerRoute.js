const express = require('express')
const router = express.Router()
const customerController = require('../controller/customerController.js')

router.post('/saveCustomer', customerController.saveCustomer)

router.get('/getCustomer', customerController.getcustomer)


router.get('/getCustomerById/:id', customerController.getcustomerById)

router.delete('/deleteCustomer/:id', customerController.deletecustomer)
router.put('/updateCustomer/:id',customerController.updatecustomer)
module.exports = router