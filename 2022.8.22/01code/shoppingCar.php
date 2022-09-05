<?php
    $goods1 = array("id"=>"01001","name"=>"铅笔","price"=>1.5,"count"=>1,"limit"=>10);
    $goods2 = array("id"=>"01002","name"=>"钢笔","price"=>55,"count"=>2);
    $goods3 = array("id"=>"01003","name"=>"毛笔","price"=>250,"count"=>1);
 
    $arr = array($goods1,$goods2,$goods3);

    $str = json_encode($arr);
    
    echo $str;
?>