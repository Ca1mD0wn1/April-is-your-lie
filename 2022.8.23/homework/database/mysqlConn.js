const mysql = require("mysql");
// 创建数据库的连接
const dbConn = mysql.createConnection({
    port: 3306,
    user: "root",
    password: "root",
    database: "cxl1"
})

// 连接数据库
dbConn.connect();
//返回数据库连接对象
module.exports = dbConn;


