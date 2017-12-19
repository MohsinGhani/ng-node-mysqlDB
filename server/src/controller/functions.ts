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