import http from "http";
// import mysql from "mysql"
// const http = require("http");
// const mysql = require("mysql");
// import Star02 from "./node_modules/xagptools/js/Star02/index"

import Star02 from "xagptools/js/Star02/index.js";


const server = http.createServer(function(req,res){

    let s = new Star02();

});

server.listen(9002,"localhost",function(){
    console.log("服务器启动成功！");
})