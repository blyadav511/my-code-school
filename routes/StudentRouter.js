"use strict";

let BaseRouter = require("./BaseRouter");
let router = new BaseRouter();

router.get("/student", function(req, res, next){
	console.log("test1 call received !!!");
	return res.status(200).json({"data":"HIIII"});
});

module.exports = router 