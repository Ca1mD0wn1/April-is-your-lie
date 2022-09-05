const url = require("url");
const queryString = require("querystring");
const vipsdb = require("../database/vipsdb");
module.exports = function (req, res) {

    switch (req.method.toLowerCase()) {
        case "get": getFn(req, res); break;
        case "post": postFn(req, res); break;
        default: ;
    }


}
async function getFn(req, res) {
    const obj = url.parse(req.url, true);
    const { username, password } = obj.query;
    try {

        let result = await vipsdb.findUser(username, password);
        if (result) {

            res.writeHead(200, {
                "content-type": "text/html;charset=utf-8"
            })
            res.end("success");
        } else {
            res.writeHead(200, {
                "content-type": "text/html;charset=utf-8"
            })
            res.end("fail");

        }
    } catch (err) {
        res.writeHead(200, {
            "content-type": "text/html;charset=utf-8"
        })
        res.end("注册失败，数据库出错！");
    }



}


function postFn(req, res) {
    let result = '';
    req.on('data', function (data) {
        result += data;
    })

    req.on('end', async function (err) {

        console.log(req.body);
        if (!err) {
            const { username, password } = queryString.parse(result);
            try {
                let result = await vipsdb.addUser(username, password);
                if (result) {
                    res.writeHead(200, {
                        "content-type": "text/html;charset=utf-8"
                    });
                    res.end("success");
                } else {
                    res.writeHead(200, {
                        "content-type": "text/html;charset=utf-8"
                    })
                    res.end("fail");

                }
            } catch (e) {
                res.writeHead(200, {
                    "content-type": "text/html;charset=utf-8"
                });
                res.end("注册失败，数据库出错!");
            }
        }
    })
}