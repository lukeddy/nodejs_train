/**
 * Created by Administrator on 2014/8/21.
 */
var http = require("http");
var url = require("url");
var sender=require("./mailsender");

var start = function(route,handle){
    http.createServer(function(request,response){
        var pathname = url.parse(request.url).pathname;

        if(pathname=="/"){
            response.writeHead(200,{"Content-Type":"text/plain"});
            response.write("hello nodejs,I am index");
            response.end();
 
        }else if(pathname == "/start"){
            response.writeHead(200,{"Content-Type":"text/plain"});
            response.write("server started.");
            response.end();
        }else if(pathname=="/sendmail"){
           sender.send();
        }

        else{
            response.writeHead(200,{"Content-Type":"text/plain"});
            response.write("404 Not found.");
            response.end();
        }

    }).listen(8888);

};
exports.start  = start ;
console.log("server started on port 8888");