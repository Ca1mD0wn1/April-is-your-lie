// const mysql = require("mysql");
import mysql from 'mysql';

//require引入的模块名，如果不写路径，默认在node安装目录下，查找，如果找不到，就在当前项目的目录下的node_modules（第三方模块）里去找。


// 创建数据库的连接
const dbConn = mysql.createConnection({    
    port:3308,
    user:"root",
    password:"root",
    database:"gp02db"
})

// 连接数据库
dbConn.connect();

// 查询
// let sqlStr=` select * from  medicine `;

// let sqlStr=` select * from  vips where username='tianwater_110'`;

// dbConn.query(sqlStr,function(err,result){
//     if(err){
//         // console.log("");
//         throw new Error("查询失败！");
//     }else{
//         console.log("查询结果",result);
//         console.log(Array.isArray(result));
//     }
// })


// 添加

let sqlStr=`insert into vips(username,userpass) values('王喜珍','123668')`;

dbConn.query(sqlStr,function(err,result){
    if(err){
        // console.log("");
        throw new Error("查询失败！");
    }else{
        console.log("查询结果",result);
        console.log(Array.isArray(result));
    }
})
