/**
 * Created by tangzhiqiang on 16/3/12.
 */
var express=require('express');

var app=express();

//引用初始化设置:
//app.use(express.static('public'));
//app.use(express.static('files'));

app.set('view engine', 'jade');

app.get("/",function(req,res){
    res.send("express视图引擎练习");
});

app.get('/hello',function(req,res){
    res.send("Hello World");
});

app.get('/home', function (req, res) {
    res.render('index', { title: '主页', message: '你好Express,我是内容'});
});


var server=app.listen(3000,function(){
    var host=server.address().address;
    var port=server.address().port;

    console.log("服务器启动成功,http://%s:%s",host,port);
});

