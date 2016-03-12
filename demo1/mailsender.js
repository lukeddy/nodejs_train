//安装nodemailer
//npm install -g nodemailer

var nodemailer=require("nodemailer");

var MailSender={};


MailSender.send=function(){
   //创建连接池
var smtpTransport=nodemailer.createTransport("SMTP",{
  host:"smtp.qq.com",
  secureConnection:true,
  port:465,
  auth:{
  	user:"xxxxxxxxx@qq.com",
  	pass:"xxxxxxxx"
  }
});

//set mail contents
var mailOptions={
	from:"yes <xxxxxx@qq.com>",
	to:"xxxxx@qq.com",
	subject:"Hello World",
	html:"<b>thanks a for visiting!</b> 世界，你好！"
}

//发送邮件
smtpTransport.sendMail(mailOptions,function(error,respose){

	if(error){
        console.log(error);
	}else{
        console.log("message sent to:"+response.message);
	}
	//close pool
	smtpTransport.close();
});
}

module.exports = MailSender;