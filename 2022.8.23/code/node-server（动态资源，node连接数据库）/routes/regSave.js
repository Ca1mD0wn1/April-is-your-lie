const { log } = require("console");
const url = require("url");
const queryString = require("querystring");
const vipsdb = require("../db/vipsdb");

module.exports = function (req, res) {

    switch (req.method.toLowerCase()) {
        case "get": getFn(req, res); break;
        case "post": postFn(req, res); break;
        default: ;
    }

}

async function getFn(req, res) {

    // 一、得到前端发来的数据
    //使用的是官方提供url模块，获取前端get方式传来的的数据。

    const obj = url.parse(req.url, true);
    console.log("obj.query", obj.query);
    const { username, userpass } = obj.query;

    // 二、连接数据库，保存数据
    try {

        let result = await vipsdb.addVips(username, userpass);
        if (result) {
            // 三、响应给前端
            res.writeHead(200, {
                "content-type": "text/html;charset=utf-8"
            })
            res.end("success");
        } else {
            // 三、响应给前端
            res.writeHead(200, {
                "content-type": "text/html;charset=utf-8"
            })
            res.end("fail");
        }
    } catch (err) {
        // 三、响应给前端
        res.writeHead(200, {
            "content-type": "text/html;charset=utf-8"
        })
        res.end("注册失败，数据库出错！");
    }
}

function postFn(req, res) {
    // 一、获取前端传来的数据（post方式）
    let result = "";

    // data事件：表示传递的数据够了65535后，就触发data。
    req.on("data", (chunk) => {
        // chunk:一次传输来的数据
        console.log("chunk", chunk);
        result += chunk;
    })

    // end事件：数据传递完毕。
    req.on("end", async (err) => {
        if (!err) {
            log("result", result);//username=%E6%9D%8E%E4%BF%8A&userpass=123666
            const { username, userpass } = queryString.parse(result);

            // 二、连接数据库，保存数据
            try {

                let result = await vipsdb.addVips(username, userpass);
                if (result) {
                    // 三、响应给前端
                    res.writeHead(200, {
                        "content-type": "text/html;charset=utf-8"
                    })
                    res.end("success");
                } else {
                    // 三、响应给前端
                    res.writeHead(200, {
                        "content-type": "text/html;charset=utf-8"
                    })
                    res.end("fail");
                }
            } catch (err) {
                // 三、响应给前端
                res.writeHead(200, {
                    "content-type": "text/html;charset=utf-8"
                })
                res.end("注册失败，数据库出错！");
            }
        }
    })

}