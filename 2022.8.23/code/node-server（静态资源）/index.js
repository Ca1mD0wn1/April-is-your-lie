
const http = require("http");

const server = http.createServer(function(req,res){
    console.log("有请求来了");
    // req:请求对象，保存着前端请求的所有信息

    // req.url:表示请求的路径。
    console.log("req.url",req.url);
    // req.method:请求方式
    console.log("req.method",req.method);


    // res：响应对象，保存着所有的响应信息，已经用于响应内容的方法。
    
    // res.setHeader:设置响应头，下面这这句话是设置响应的内容类型（content-type）为html代码，编码用的是utf-8
    // res.setHeader("content-type","text/html;charset=utf-8");
    // res.writeHead:设置http的响应编码，并设置内容类型和内容编码
    res.writeHead(200,{
        "content-type":"text/html;charset=utf-8"
    })

    // res.write:给前端响应内容的
    res.write("helle node，我是汉字<br/>");
    // res.end()：表示响应完毕。
    res.end("over");

})

server.listen(9002,"localhost",function(){
    console.log(arguments);
    console.log("服务器启动成功!");
})