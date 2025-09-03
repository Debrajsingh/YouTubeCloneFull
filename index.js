var express = require("express");
var app = express();
var port = 4000

require('./Connection/conn');



app.listen(port,()=>{console.log("Our backend project is running on Port 4000")});