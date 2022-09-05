// 这个模式是针对vips表进行增删改查的所有操作

const dbConn = require("./dbConn");


module.exports = {

    // 添加用户（只做数据库的操作）
    addVips: function (username, userpass) {
        return new Promise(function (resolve, reject) {

            const sqlStr = `insert into vips(username,userpass) values('${username}','${userpass}')`;
            // 执行sql语句，也是异步操作（相当于node给mysql发送请求）；
            dbConn.query(sqlStr, function (err, result) {
                if (err) {
                    reject("数据库出错"); //数据库直接出错
                } else {//数据库没有出出错
                    if (result.affectedRows == 1) {//添加了一条
                        resolve(true);
                    } else {//添加了0条。
                        resolve(false);
                    }
                }
            })

        })
    },



    // 根据查询条件，查询数据（验证用户名是否存在，登录）；
    queryVips: function (queryObj) {

        return new Promise(function (resolve, reject) {
            let sqlStr = `select * from vips where 1=1  `;
            for (let key in queryObj) {
                sqlStr += ` and ${key}='${queryObj[key]}' `;
            }

            dbConn.query(sqlStr, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            })

        })
    },


    // 查询用户：
    queryVips2: function (queryObj, success, fail) {

        let sqlStr = `select * from vips where 1=1  `;
        for (let key in queryObj) {
            sqlStr += ` and ${key}='${queryObj[key]}' `;
        }

        // 执行sql语句的：相当于node给mysql发送请求（也是异步的）
        dbConn.query(sqlStr, function (err, result) {
            // 当mysql响应回来后，调用该函数
            if (err) {
                fail();
            } else {
                success();
            }
        })


    }



}
