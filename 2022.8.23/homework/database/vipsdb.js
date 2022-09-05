const dbConn = require('./mysqlConn');

module.exports = {

    //注册用户

    addUser: function (username, password) {

        return new Promise(function (resolve, reject) {


            const sqlStr = `insert into user (username, password) values('${username}', '${password}')`;
            dbConn.query(sqlStr, function (err, result) {
                if (err) {
                    reject("数据库出错")
                } else {
                    if (result.affectedRows == 1) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }
            })
        })
    },
    findUser: function (queryObj) {
        console.log("进入了vipdb");
        return new Promise(function (resolve, reject) {
            let sqlStr = `select 'username' from user where 1=1`;
            for (let key in queryObj) {
                sqlStr += ` and ${key}='${queryObj[key]}'`;
            }
            console.log(sqlStr);
            dbConn.query(sqlStr, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            });
        })
    },
    //查询用户
    findUser2: function (queryObj, success, fail) {

        let sqlStr = `select * from user where 1=1  `;
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
