<?php
$conn = mysqli_connect("localhost", "root", "root", "z");
// 服务器 用户名 密码 数据库

$sql = "SELECT fname FROM food";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_all($result);
mysqli_close($conn);
print_r($row);