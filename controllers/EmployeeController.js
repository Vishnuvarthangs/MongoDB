const Employee = require('../models/EmployeeModels')

//show list of Employees
const index = (req, res, next) => {
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error=> {
        res.json({
            message: 'An Error have occured!'
        })
    })
}

//Show single Employee
const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response => {
        res.json({
            response
        })
        .catch(error=> {
            res.json({
                message: 'An Error have occured!'
            })
        })
})
}

// add new employee
const store = (req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        age: req.body.age,
        gender: req.body.gender,
        dob: req.body.dob,
        address: req.body.address
    })
    employee.save()
   .then(response => {
    res.json({
        message: 'Employee saved successfully!'
    })
    .catch(error=> {
        res.json({
            message: 'while Save an Error have occured!'
        })
    })
   })
}

//update employee
const update = (req, res, next) =>{
    let employeeID= req.body.employeeID

    let updatedData =  {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        age: req.body.age,
        gender: req.body.gender,
        dob: req.body.dob,
        address: req.body.address
    }
    Employee.findByIdAndUpdate(employeeID, {$set: updatedData})
    .then(() => {
    res.json({
        message: 'Employee updated successfully!'
    })
    .catch(error=> {
        res.json({
            message: 'While update an Error have occured!'
        })
    })
   })
}

//delete employee
const destroy = (req, res, next) => {
    let employeeID= req.body.employeeID
    Employee.findByIdAndRemove(employeeID)
    .then(() => {
    req.json({
        message: 'Employee deleted successfully!'
    })
    .catch(error=> {
        req.json({
            message: 'While update an Error have occured!'
        })
    })
   })
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
}