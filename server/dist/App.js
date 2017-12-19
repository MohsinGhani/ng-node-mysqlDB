"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const express_1 = require("express");
const functions_1 = require("./controller/functions");
const router = express_1.Router();
// Creates and configures an ExpressJS web server.
class App {
    constructor() {
        // todo: prepare your db credentials, promise modifiers etc here
        this.express = express();
        this.middleware();
        this.routes();
        console.log("\n");
        console.log("Server is run on port 3000");
        console.log("Now configure your routes and everything should work!");
        // todo: prepare your db here
    }
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        let router = express.Router();
        // placeholder route handler
        router.get('/getAllReports', functions_1.Functions.getAllReports);
        router.get('/getReport/:id', functions_1.Functions.getReport);
        router.get('/add', functions_1.Functions.post);
        router.get('/delete/:id', functions_1.Functions.delete);
        router.get('/add/:id', functions_1.Functions.put);
        this.express.use('/api/', router);
    }
}
exports.default = new App().express;
