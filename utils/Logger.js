"use strict";
let bunyan = require("bunyan");

class Logger{

	static init(config){
		const streams = [
			{
				level : process.env.APP_LOG_LEVEL || 'debug',
				path : process.env.APP_LOG || "./my_code_school.log"
			}
		];

		this.logger = bunyan.createLogger({
			name : "my_code_school",
			src : true,
			streams : streams
		});
		return this.logger;
	}

	static getLogger(logRecord){
		return this.logger.child(logRecord);
	}

}

if(Logger.logger === undefined){
	Logger.init();
}

module.exports = Logger;
