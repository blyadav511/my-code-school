"use strict";

let BaseRouter = require("./BaseRouter");
let router = new BaseRouter();
let logger = require("../utils/Logger").getLogger({"class":"StudentRouter"});

router.get("/student", function(req, res, next){
	console.log("test1 call received !!!");
	logger.info({"service":"STUDENT ROUTER"}, "its test logger");
	return res.status(200).json({"data":"HIIII"});
});

module.exports = router 