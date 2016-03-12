/**
 * Created by tangzhiqiang on 16/3/12.
 */
var express=require('express');
var app=express();

app.get('/',function(req,res){
    res.send("Hello World");
});

var server=app.listen(3000,function(){
    var host=server.address().address;
    var port=server.address().port;

    console.log("服务器启动成功,端口3000,请访问 http://localhost:3000/进行测试");
});

