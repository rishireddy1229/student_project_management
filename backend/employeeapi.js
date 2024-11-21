const express = require('express');

const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

let employees = [
    { id: 1, name: "Afroz", dept: "CSE", address: "Kurnool" },
    { id: 2, name: "Nagesh", dept: "IT", address: "Mahaboobabad" },
    { id: 3, name: "VDS Krishna", dept: "CSE", address: "Hyderabad" },
]


app.get('/', (req, res) => {
    res.json(employees);
})

app.get('/:id', (req, res) => {
    // for(i=0; i<employees.length; i++){
    //     if(employees[i] == parseInt(req.params.id)){
    //         res.json(employee[i]);
    //         break;
    //     }
    // }

    let employee = employees.find((employee) => employee.id === parseInt(req.params.id));
    if (!employee) {
        res.json({ message: `Employee with ${req.params.id} doesn't exists..` })
    }
    res.json(employee);
})

app.post('/', (req, res) => {
    console.log(req.body);
    let employee = {
        id: employees.length + 1,
        name: req.body.name,
        dept: req.body.dept,
        address: req.body.address
    }
    employees.push(employee);
    res.json(employee);
})

app.put('/:id', (req, res) => {
    let employee = employees.find((employee) => employee.id === parseInt(req.params.id));
    if (!employee) {
        res.json({ message: `Employee with ${req.params.id} doesn't exists..` })
    }
    employee.id = parseInt(req.params.id);
    employee.name = req.body.name;
    employee.dept = req.body.dept;
    employee.address = req.body.address;

    res.json(employee);

})
app.patch('/:id', (req, res) => {
    let employee = employees.find((employee) => employee.id === parseInt(req.params.id));
    if (!employee) {
        res.json({ message: `Employee with ${req.params.id} doesn't exists..` })
    }
    employee.id = parseInt(req.params.id);
    employee.name = req.body.name;
    // employee.dept = req.body.dept;
    // employee.address = req.body.address;

    res.json(employee);
})

app.delete('/:id', (req, res) => {
    let employee = employees.find((employee) => employee.id === parseInt(req.params.id));
    if (!employee) {
        res.json({ message: `Employee with ${req.params.id} doesn't exists..` })
    }
    let index = employees.indexOf(employee)
    employees.splice(index, 1);
    res.json();
})

app.listen(3000, () => console.log("Server listening at port 3000"));