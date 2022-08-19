<?php

//后端给前端响应内容的类型和字符编码。   
header("Content-type: text/html; charset=utf-8");

// 1、接收前端发来的数据
$username = $_GET["username"];


// 2、连接数据库，插入数据
//1) 、连接数据库
$conn = mysqli_connect("localhost:3306", "root", "root", "gp02db");
if ($conn) {
    //2）、执行sql语句
    $sqlStr = "select * from vips where username='$username'";

    $result = mysqli_query($conn, $sqlStr);

    // 3)、关闭数据库
    mysqli_close($conn);
}

// 3、响应（告诉前端是否注册成功）；
// 1)、获取结果的行数
$rows = mysqli_num_rows($result);
if ($rows == 1) {
    echo "1"; //表示用户名已经被使用
} else {
    echo "0"; //表示用户名没有被使用
}