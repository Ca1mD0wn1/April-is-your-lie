const url = require("url");

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

function getFn(req,res){
    // 1、接收前端传来的数据
    let {query} = url.parse(req.url,true);
    
    // 2、在数据库中进行查询
    if(query.username=="李俊"){
        // 3、响应
        res.writeHead(200,{
            "content-type":"text/html;charset=utf-8"
        })
        res.end("1");        
    }else{
        // 3、响应
        res.writeHead(200,{
            "content-type":"text/html;charset=utf-8"
        })
        res.end("0");        
    }
    

}