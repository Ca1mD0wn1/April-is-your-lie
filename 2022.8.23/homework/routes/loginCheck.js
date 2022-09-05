const queryString = require('querystring');

const vipsdb = require('../database/vipsdb');

module.exports = function (req, res) {

    if (req.method.toLowerCase() == "post") {

        postFn(req, res);
    }
}
async function postFn(req, res) {

    let result = '';
    req.on("data", function (data) {
        result += data;
    })
    req.on("end", async function (err) {
        console.log(result);
        if (!err) {

            const { username, password } = queryString.parse(result);

            try {
                const arr = await vipsdb.findUser({
                    username, password
                });
                res.writeHead(200);
                if (arr.length == 1) {
                    res.end("success");
                } else {
                    res.end("fail");
                }
            } catch (err) {
                res.writeHead(500);
                res.end("fail");
            }

        }

    })
}

