const { request } = require("express");
const express = require ("express")
const app = express()
app.get ("/",(req, res )=> {
    res.send("Hello World")
})
app.listen(3000);
console.log("running")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', route1);
app.use('/', routeshtml);
const apiRoutes = require('./Routes/route1');
const htmlRoutes = require('./Routes/routeshtml');