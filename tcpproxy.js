var util = require('util');
var net = require("net");
 
process.on("uncaughtException", function(e) {
    console.log(e);
});
 
if (process.argv.length != 5) {
  console.log("Require the following command line arguments:" +
    " proxy_port service_host service_port");
    console.log(" e.g. 9001 www.google.com 80");
  process.exit();
}
 
var proxyPort = process.argv[2];
var serviceHost = process.argv[3];
var servicePort = process.argv[4];
 
net.createServer(function (proxySocket) {
  var connected = false;
  var buffers = new Array();
  var serviceSocket = new net.Socket();
  serviceSocket.connect(parseInt(servicePort), serviceHost, function() {
    connected = true;
    if (buffers.length > 0) {
      for (i = 0; i < buffers.length; i++) {
        console.log(buffers[i]);
        serviceSocket.write(buffers[i]);
      }
    }
  });
  proxySocket.on("error", function (e) {
    serviceSocket.end();
  });
  serviceSocket.on("error", function (e) {
    console.log("Could not connect to service at host "
      + serviceHost + ', port ' + servicePort);
    proxySocket.end();
  });
  proxySocket.on("data", function (data) {
    if (connected) {
      serviceSocket.write(data);
    } else {
      buffers[buffers.length] = data;
    }
  });
  serviceSocket.on("data", function(data) {
    proxySocket.write(data);
  });
  proxySocket.on("close", function(had_error) {
    serviceSocket.end();
  });
  serviceSocket.on("close", function(had_error) {
    proxySocket.end();
  });
}).listen(proxyPort);


/**
Go ahead, execute it

>node tcpproxy.js 9001 www.google.com 80
node tcpproxy.js 9001 www.baidu.com 80
Then try and access http://localhost:9001 from the browser. Such a useful tool in only a few lines of code. Don’t be surprised if Google redirects the browser to their URL, but the proxy worked.
**/
console.log("proxy started");