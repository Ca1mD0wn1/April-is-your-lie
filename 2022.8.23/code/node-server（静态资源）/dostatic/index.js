const fs = require("fs");//fs:file system，文件系统模块，可以完成文件的读取，删除，修改，文件夹的相关操作


// 静态资源全部存放在www目录下。
const staticPath = "./www"

module.exports = function(req,res){

    fs.readFile(staticPath+req.url,"utf-8",function(err,data){
        // err:表示读取文件出错
        // data：是读取到的文件的内容
        if(err){
            console.log("err",err);
            res.writeHead(404,{
                "content-type":"text/html;charset=utf-8"
            })
            res.write("亲，您要找的页面丢了");
            res.end();
        }else{
            console.log("data",data);
            res.writeHead(200,{
                "content-type":"text/html;charset=utf-8"
            })
            res.write(data);
            res.end();
        }
    })

}