<?php
    
    //后端给前端响应内容的类型和字符编码。   
    header("Content-type: text/html; charset=utf-8");

    // 1、接收前端发来的数据
    $username = $_POST["username"];
    $userpass = $_POST["userpass"];

    // 2、连接数据库，插入数据
    //1) 、连接数据库
    // $conn = mysqli_connect("数据库的地址:端口号","用户名","密码","数据库名");
    $conn = mysqli_connect("localhost:3308","root","root","gp02db");
    if($conn){
        //2）、执行sql语句
        $sqlStr = "insert into vips(username,userpass) values('$username','$userpass')";
        
        $result = mysqli_query($conn,$sqlStr);
        // 3)、关闭数据库
        mysqli_close($conn); 
    }
    
    // 3、响应（告诉前端是否注册成功）；
    if($result){
        echo "success";
    }else{
        echo "fail";
    }

?>