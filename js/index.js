"use strict";

let Logger = require("./utils/Logger");
let express = require("express");
let morgan = require("morgan");
let bodyParser = require("body-parser");
let compression = require("compression");
let path = require("path");
let basicAuth = require("basic-auth-connect");

let app = express();
let auth = basicAuth(
	process.env.AUTH_USERNAME || "babu",
	process.env.AUTH_PASSWORD || "yadav"
);

const server = app.listen(process.env.PORT || 8080, ()=>{
	let host = server.address().address;
	let port = server.address().port;
	console.log("Server %s Started on port : %s ", host, port);
});

//require routers
let StudentRouter = require("./routes/StudentRouter");

//register routers;
app.use("/api/v1/students", StudentRouter);
app.use("", auth, express.static(path.join(__dirname, "..", "ui", "public")));

