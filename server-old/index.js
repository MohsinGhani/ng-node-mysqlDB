const express = require('express')
const routes = require('./routes/api')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

//initialize routes
app.use('/api',routes)

app.listen(3200,()=>{
    console.log('server has been run port:3200');
});