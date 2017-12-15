const express = require('express');
const router = express.Router();

var mysql = require('mysql');
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

// get reports
router.get('/report', (req, res) => {
    console.log('gettttttt');
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
})

// add new reports in db
router.post('/add', (req, res) => {
    console.log(req.body)
    let report = { patientName: req.body.patientName, dob: req.body.dob, age: req.body.age, gender: req.body.gender };
    connection.query(`INSERT INTO Reports(name,dob,age,gender) VALUES('${report.patientName}','${report.dob}','${report.age}','${report.gender}')`, function (error, results, fields) {
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
                "success": "user added report sucessfully"
            });
        }
    });
})

// update report
router.put('/report/:id', (req, res) => {
    console.log(req.params.id)
    connection.query(`UPDATE Reports SET name='${req.body.patientName}', dob='${req.body.dob}', age='${req.body.age}', gender='${req.body.gender}' WHERE id=${req.params.id}`, function (error, results, fields) {
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
                "data": "successfully update"
            });
        }
    });
})

// delete report
router.delete('/report/:id', (req, res) => {
    res.send({ type: 'DELETE' })
})

module.exports = router;

// {
// 	"patientName": "Mohsin Ghani",
// 	"dob" : "21-01-2017",
// 	"age" : "20",
// 	"gender" : "Male"
// }
