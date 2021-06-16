<?php

$min = $_GET["min"];
$name =$_GET["name"];
// $password = $_GET["password"];
// echo(json_encode($name,$min ));
$con = mysqli_connect('localhost', 'root', 'root','mvpro');




$sqladd= " UPDATE user SET money='$min' WHERE name='$name'";
mysqli_query($con,$sqladd);



?>