const url = require("url");
const vipsdb = require("../db/vipsdb");

// 接口文档：
// 功能:验证用户名是否可以使用
// 请求地址： /checkUser
// 请求方式：get
// 请求参数： username 表示用户名
// 响应数据(格式):
//   1:表示已被使用；0：可以使用；

module.exports = function(req,res){
    if(req.method.toLowerCase()=="get"){
        getFn(req,res);
    }
}

async function getFn(req,res){


    // 1、接收前端传来的数据
    let {query} = url.parse(req.url,true);
    console.log("query",query);
    // 2、在数据库中进行查询
    try{
        let arr = await vipsdb.queryVips({
            username:query.username
        })
        console.log("arr",arr);
        if(arr.length==1){
            res.end("1");
        }else{
            res.end("0")
        }
    }catch(err){
        res.end("数据库出错");
    }
    
}

function fff(){
    vipsdb.queryVips({
        username:query.username
    },()=>{},()=>{})

}