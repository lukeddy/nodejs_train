//安装log4js模块
//npm install -g log4js

var log4js = require('log4js');
log4js.configure({
    appenders: [
        { type: 'console' }, //控制台输出
        {
            type: 'file', //文件输出
            filename: './logs/logfile.log',
            maxLogSize: 1024,
            backups:3,
            category: 'normal'
        }
    ],
    replaceConsole: true
});
var logger = log4js.getLogger('logger');
//var logger = log4js.getLogger('normal');
//logger.setLevel('INFO');
module.exports = logger;