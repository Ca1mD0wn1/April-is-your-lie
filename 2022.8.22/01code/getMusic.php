<?php
// 后端给前端响应的内容的类型是text/html;字符集是utf-8
header("content-type:text/html;charset=utf-8");
//1、接收前端传来的数据

    $query = $_GET["query"];

    if($query=="你"){
        echo '["你是我的眼睛","你是我的小心肝","你是我的小苹果","我可以抱你吗"]';
    }else if($query=="你是"){
        echo '["你是我的眼睛","你是我的小心肝","你是我的小苹果"]';
    }else{
        echo "[]";
    }
    
?>