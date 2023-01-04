const { request } = require("express");
const express = require ("express")
const app = express()
app.get ("/",(request,)=> {
    res.send("Okay")
})
app.listen(3000);
console.log("running")