
const http = require("http");

const server = http.createServer(function(req,res){
    console.log("有请求来了");
    // req:请求对象，保存着前端请求的所有信息
    // req.url:表示请求的路径。
    console.log("req.url",req.url);
    
    // req.method:请求方式
    console.log("req.method",req.method);

    if(req.url==="/aaa"){
        
        res.writeHead(200,{
            "content-type":"text/html;charset=utf-8"
        })

        // res.write:给前端响应内容的
        res.write("helle node，我是汉字aaa<br/>");
        // res.end()：表示响应完毕。
        res.end("over");
    }else if (req.url==="/bbb"){
        res.writeHead(200,{
            "content-type":"text/html;charset=utf-8"
        })
        // res.write:给前端响应内容的
        res.write("helle node，我是汉字bbb<br/>");
        // res.end()：表示响应完毕。
        res.end("over");
    }else{
        res.writeHead(404,{
            "content-type":"text/html;charset=utf-8"
        });
        res.write("亲，您要找的页面丢了");
        res.end();
    }

})

server.listen(9002,"localhost",function(){
    console.log(arguments);
    console.log("服务器启动成功!");
})