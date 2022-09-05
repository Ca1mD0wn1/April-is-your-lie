
// 连接数据库的代码，这是公共的。

const mysql = require("mysql");

const dbConn = mysql.createConnection({
    port:3308,
    user:"root",
    password:"root",
    database:"gp02db"
})

dbConn.connect();

module.exports = dbConn;