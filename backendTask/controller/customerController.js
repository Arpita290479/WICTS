const db  = require('../dataBaseConfig.js')

//this is customer controller
exports.saveCustomer = (req, res)=>{
    let full_name = req.body.full_name
    let email = req.body.email
    let number = req.body.number
    let address = req.body.address
    let payment_dues = req.body.payment_dues
   
    let value = [[full_name, number, address, payment_dues, email]]

    let sql = 'insert into customer(full_name, number, address, payment_dues, email) values ?'

    db.query(sql, [value], (err, result)=>{
        if(err) throw err
        else{
            res.send("customer saved")
        }
    })
    
}

exports.getcustomer = (req, res)=>{
    let sql = 'select * from customer'
    db.query(sql, (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}



exports.deletecustomer = (req, res)=>{
    let id = req.params.id
    let sql = "delete from customer where id = ?"
    db.query(sql, [id], (err,result)=>{
        if(err) throw err
        else{
            res.send("customer deleted")
        }
    })
}

exports.getcustomerById = (req, res)=>{
    let id = req.params.id
    let sql = 'select * from customer where id = ?'
    db.query(sql, [id], (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}


exports.updatecustomer=(req,res)=>{
    let id=req.params.id
    let newData=req.body
    let sql='update customer set ? where id=?'
    db.query(sql,[newData,id],(err,result)=>{
        if(err) throw err
        else{
            res.send("customer updated")
        }
    })
}