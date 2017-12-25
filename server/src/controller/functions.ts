import { Promise } from "q";

var mysql = require('mysql');

interface Employee {
    name: String,
    email: String,
    address: String,
    salary: String,
    qualification: Array<any>,
    dob: String,
    age: String,
    contact: String,
    gender: String,
    branchName: String
    password: String,
    post: String,
    status: Number
}

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'Lab',
    port: '3306'
});

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected");
    } else {
        console.log("Error connecting database", err);
    }
});
export class Functions {
    constructor() { }
    static getAllReports(req, res) {
        connection.query(`SELECT * FROM Reports`, function (error, results, fields) {
            if (error) {
                console.log("error ocurred", error);
                res.send({
                    "code": 400,
                    "failed": "error ocurred"
                })
            } else {
                // console.log('The solution is: ', results);
                res.send({
                    "code": 200,
                    "data": results
                });
            }
        });
    }

    static getReport(req, res) {
        let id = req.params.id;
        console.log(id)
        connection.query(`SELECT * FROM Reports where id=${id}`, (error, results, fields) => {
            if (error) {
                console.log("error ocurred", error);
                res.send({
                    "code": 400,
                    "failed": "error ocurred"
                })
            } else {
                // console.log('The solution is: ', results);
                res.send({
                    "code": 200,
                    "data": results
                });
            }
        });
    }

    static addEmployee(req, res) {
        let employee: Employee = req.body;
        Promise((resolve, reject) => {
            connection.query(`INSERT INTO Employees(name,email,address,salary,dob,age,contact,gender,branchName,password,post,status)
            VALUES('${employee.name}','${employee.email}','${employee.address}',${employee.salary},'${employee.dob}','${employee.age}','${employee.contact}','${employee.gender}','${employee.branchName}','${employee.password}','${employee.post}', ${employee.status})`, (error, results, fields) => {
                    if (error) {
                        res.send({ "code" : 400, "failed": error })
                    } else {
                        resolve({ status: true, data: results });
                    }
                });
        }).then((success) => {
            Promise((res, rej) => {
                connection.query(`SELECT id FROM Employees WHERE email = '${employee.email}'`, (error, results, fields) => {
                    res(results[0].id)
                });
            }).then((id) => {
                employee.qualification.forEach((degree) => {
                    connection.query(`INSERT INTO Qualification(id,degree,post) VALUES(${id},'${degree}','${employee.post}')`, (error, results, fields) => {
                        if(error){
                            res.send({ "code" : 400, "failed": error })
                        }
                    });
                })
            })
            res.send(success);
        })
    }

    static post(req, res) {
        console.log('req.body ', req.body);
        res.send({ status: true, data: 'post request' });
    }

    static put(req, res, next) {
        var id = req.params.id;
        res.send({ status: true, data: 'put request' })
    }

    static delete(req, res, next) {
        res.send({ status: true, data: 'delete request' })
    }
}