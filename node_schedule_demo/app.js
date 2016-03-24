var schedule = require('node-schedule');

//每一分钟执行一次
// var j = schedule.scheduleJob('*/1 * * * *', function(){
//   console.log('The answer to life, the universe, and everything!');
// });

//每一秒执行一次
var rule = new schedule.RecurrenceRule();
　　var times = [];
　　for(var i=1; i<60; i++){
　　　　times.push(i);
　　}
　　rule.second = times;

　　var counter=0;
　　var j = schedule.scheduleJob(rule, function(){
 　　 counter++;
  　　　console.log("定时任务执行了："+(new  Date().toTimeString())+","+counter);
　　});

//每10秒执行一次
// var rule = new schedule.RecurrenceRule();

// 　　rule.second = 5;

// 　　var counter=0;
// 　　var j = schedule.scheduleJob(rule, function(){
//  　　 counter++;
//   　　console.log("定时任务执行了："+(new  Date().toTimeString())+","+counter);
// 　　});