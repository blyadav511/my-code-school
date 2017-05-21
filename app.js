"use strict";

var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var app = express();

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'jade');

app.use(logger('dev'));
// app.use(bodyParser.urlencoded({
// 	extended:false,
// 	paramaterLimit:10000,
// 	limit: 1024*1024*10
// }));

// app.use(bodyParser.json({
// 	extended:false,
// 	paramaterLimit:10000,
// 	limit: 1024*1024*10
// }));

// app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

let StudentRouter = require("./routes/StudentRouter");

app.use("/student", StudentRouter);


module.exports = app;