<?php
    $goods1 = array("name"=>"日本进口味精瓶 调料瓶粉末瓶 芝麻花椒胡椒粉瓶 调味瓶 调味盒","price"=>9.9,"img"=>"img/01.png","count"=>15);
    $goods2 = array("name"=>"外贸 100%汉麻被套 仿旧蓝色水洗汉麻被套 麻被套 冬暖夏凉 包邮","price"=>2.9,"img"=>"img/02.png","count"=>15);
    $goods3 = array("name"=>"22222222222222","price"=>19.9,"img"=>"img/3.png","count"=>105);
    $goods4 = array("name"=>"3333333333333","price"=>29.9,"img"=>"img/4.png","count"=>150);

    
    $arr = array($goods1,$goods2,$goods3,$goods4);

    $str = json_encode($arr);
    
    echo $str;
?>