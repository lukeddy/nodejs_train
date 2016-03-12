/**
 * Created by tangzhiqiang on 16/3/12.
 */
var express=require('express');

var app=express();
var router=express.Router();


//引用初始化设置:
//app.use(express.static('public'));
//app.use(express.static('files'));

// 没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件
router.use(function(req,res,next){
    console.log('Time:',Date.now());
    next();
});

// 一个中间件栈，显示任何指向 /user/:id 的 HTTP 请求的信息
router.use('/user/:id',function(req,res,next){
    console.log("Request URL:",req.originalUrl);
    next();
},function(req,res,next){
    console.log("Request Type:",req.method);
    next();
});


// 一个中间件栈，处理指向 /user/:id 的 GET 请求
router.get('/user/:id',function(req,res,next){
    //如果用户id尾0,跳转到myRoute路由
    if(req.params.id==0){
        res.send("用户ID为0的用户不存在!");
    }else if(req.params.id==100){
        res.redirect("/myRoute");
    }else{
        next();
    }
});

// 处理 /user/:id， 渲染一个特殊页面
router.get('/user/:id', function (req, res, next) {
    console.log(req.params.id);
    res.send("服务器获取到的参数值:"+req.params.id);
    //res.render('special');
});

// 将路由挂载至应用
app.use('/', router);

app.get("/",function(req,res){
    res.send("express 路由中间件练习");
});

app.get('/myRoute',function(req,res){
    res.send("Hello World");
});

var server=app.listen(3000,function(){
    var host=server.address().address;
    var port=server.address().port;

    console.log("服务器启动成功,http://%s:%s",host,port);
});

