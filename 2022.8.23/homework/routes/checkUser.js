const url = require('url');
const vipsdb = require("../database/vipsdb");

// 接口文档：
// 功能:验证用户名是否可以使用
// 请求地址： /checkUser
// 请求方式：get
// 请求参数： username 表示用户名
// 响应数据(格式):
//   1:表示已被使用；0：可以使用；

module.exports = function (req, res) {
    console.log(456456);
    if (req.method.toLowerCase() == 'get') {
        console.log(123123);
        getFn(req, res);
    }
}

async function getFn(req, res) {
    console.log("CheckUser.req.body");
    let { query } = url.parse(req.url, true);
    try {

        let arr = await vipsdb.findUser({
            username: query.username,
        })
        if (arr.length == 1) {
            res.end("1");
        } else {
            res.end("0");
        }
    } catch (err) {
        console.log("数据库出错");
    }

}