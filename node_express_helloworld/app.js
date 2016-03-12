/**
 * Created by tangzhiqiang on 16/3/12.
 */
var express=require('express');
var app=express();

//引用初始化设置:
//静态文件目录设置
app.use(express.static('public'));
app.use(express.static('files'));

//对网站首页的访问返回"Hello World"
app.get('/',function(req,res){
    res.send("Hello World");
});


//网站首页接受POST请求
app.post("/",function(req,res){
    res.send("Got a POST request");
});

//PUT请求
app.put("/user",function(req,res){
    res.send("Got a PUT request at /user");
});

//delete请求
app.delete("/user",function(req,res){
    res.send("Got a Delete request at /user")
});

//发送文件
app.get("/hello",function(req,res){
    res.sendfile("hello.html");
});

//下载文件
app.get("/d",function(req,res){
    res.download("./files/hello.txt");
});

//下载取别名
app.get("/d2",function(req,res){
    res.download("./files/hello.txt","hello_nicname.txt",function(err){
        if(err){
            console.log("下载文件出问题",err);
            res.send("下载文件失败");
        }else{
            console.log("下载文件成功");
        }
    });
});

var server=app.listen(3000,function(){
    var host=server.address().address;
    var port=server.address().port;

    console.log("服务器启动成功,端口3000,请访问 http://localhost:3000/进行测试");
});

