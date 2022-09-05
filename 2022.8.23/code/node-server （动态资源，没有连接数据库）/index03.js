const http = require("http");
const path = require("path");//path：处理跟路径相关的操作（其实就是做了一些字符串操作）
const dostatic = require("./dostatic/index");
const regSave = require("./routes/regSave")
const loginCheck = require("./routes/loginCheck")
const checkUser = require("./routes/checkUser")

const server = http.createServer(function(req,res){
    console.log("有请求来了");
    // req:请求对象，保存着前端请求的所有信息
    // req.url:表示请求的路径。
    console.log("req.url",req.url);

    const extName = path.extname(req.url);
    if(extName==".html"){
        // 静态资源
        dostatic(req,res);
    }else{
        // 动态资源：api接口（跟前端交互的代码
        // 注册
        if(req.url.startsWith("/regSave")){
            regSave(req,res)
            return;
        }

        // 登录
        if(req.url.startsWith("/loginCheck")){
            loginCheck(req,res);
            return ;
        }


        // 验证用户名是否存在
        if(req.url.startsWith("/checkUser")){
            checkUser(req,res);
            return ;
        }
      
    }
})

server.listen(9003,"localhost",function(){
    console.log(arguments);
    console.log("服务器启动成功!，9003");
})