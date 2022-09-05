const http = require("http");
const path = require("path");//path：处理跟路径相关的操作（其实就是做了一些字符串操作）
const dostatic = require("./dostatic/index");

const server = http.createServer(function(req,res){
    console.log("有请求来了");
    // req:请求对象，保存着前端请求的所有信息
    // req.url:表示请求的路径。
    console.log("req.url",req.url);

    const extName = path.extname(req.url);
    if(extName==".html"){
        dostatic(req,res);
    }else{
        res.writeHead(404,{
            "content-type":"text/html;charset=utf-8"
        });
        res.write("亲，您要找的页面丢了");
        res.end();
    }
})

server.listen(9003,"localhost",function(){
    console.log(arguments);
    console.log("服务器启动成功!，9003");
})