const queryString = require("querystring");

const vipsdb = require("../db/vipsdb");


// 接口文档：
// 功能:登录
// 请求地址： /loginCheck
// 请求方式：post
// 请求参数： 
//   username： 用户名
//   userpass： 密码

// 响应数据(格式):
//  success：登录成功
//  fail：登录失败

module.exports = function (req, res) {
    if (req.method.toLowerCase() == "post") {
        postFn(req, res);
    }
}

async function postFn(req, res) {
    // 1、接收前端传来的数据
    let result = "";

    // data事件：表示传递的数据够了65535后，就触发data。
    req.on("data", (chunk) => {
        // chunk:一次传输来的数据
        result += chunk;
    })

    // end事件：数据传递完毕。
    req.on("end", async (err) => {
        if (!err) {            
            const { username, userpass } = queryString.parse(result);
            try{
                const arr = await vipsdb.queryVips({
                    username,userpass
                });
                
                res.writeHead(200);
                if(arr.length==1){
                    res.end("success");
                }else{
                    res.end("fail");
                }
            }catch(err){
                res.writeHead(500);
                res.end("fail");
            }
        }
    });

}