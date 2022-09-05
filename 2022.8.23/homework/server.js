const http = require('http');
const path = require('path');
const dostatic = require('./dostatic/index');
const loginCheck = require("./routes/loginCheck")
const checkUser = require("./routes/checkUser");
const regSave = require("./routes/regSave")
const server = http.createServer(function (req, res) {
    console.log("有请求来了");
    // req:请求对象，保存着前端请求的所有信息
    // req.url:表示请求的路径。
    console.log("req.url", req.url);
    const extName = path.extname(req.url);
    if (extName == ".html") {
        dostatic(req, res)
    } else {
        if (req.url.startsWith("/regSave")) {



            console.log("req", req.body);


            regSave(req, res);//req是前端发过来的数据数据 res是返回的数据
            return;
        }

        if (req.url.startsWith("/checkUser")) {
            console.log("checkUser", checkUser);
            checkUser(req, res);
            return;
        }
        if (req.url.startsWith("/loginCheck")) {
            loginCheck(req, res);
            return;
        }

    }
})


server.listen(1337, "localhost", function () {
    console.log("服务器启动成功!,1337");
})