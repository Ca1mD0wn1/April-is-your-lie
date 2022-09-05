const url = require("url");

module.exports = function(req,res){
    
    // 一、得到前端发来的数据
    // 1、get方式：

    //req.url  :  /regSave?username=%E6%9D%8E%E4%BF%8A&userpass=11
    // 1)、手工解析查询字符串（跟在问号后面的内容）中的数据
    // let arr = req.url.split("?")[1].split("&");//["username=李俊",userpass=123]

    // let obj = {};
    // arr.forEach(item => {
    //     const [key,value] = item.split("=");
    //     obj[key] = value;
    // });
    // const username = obj.username;
    // const userpass = obj.userpass;


    // 2）、使用的是官方提供url模块，获取前端get方式传来的的数据。

    const obj = url.parse(req.url,true);
    console.log("obj.query",obj.query);
    const {username,userpass} = obj.query;
    // console.log("username", decodeURIComponent(obj.query.username));
    // console.log("userpass",obj.query.userpass);

    // 2、连接数据库，保存数据
    if(username=="李俊" && userpass=="123"){
        
        // 3、响应给前端
        res.writeHead(200,{
            "content-type":"text/html;charset=utf-8"
        })
        res.end("注册成功！");
    }else{
        // 3、响应给前端
        res.writeHead(200,{
            "content-type":"text/html;charset=utf-8"
        })
        res.end("注册失败！");
    }
    
}

function getFn(){

}

function postFn(){

}