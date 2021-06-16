<?php

$password = $_GET["password"];
$name =$_GET["name"];
// $password = $_GET["password"];
// echo(json_encode($name,$min ));
$con = mysqli_connect('localhost', 'root', 'root','mvpro');

$sql = "SELECT * FROM `user` WHERE `name`='$name'";
$res = mysqli_query($con,$sql);
$row=mysqli_fetch_assoc($res);



$sqladd= " UPDATE user SET password='$password' WHERE name='$name'";
$getNew = mysqli_query($con,$sqladd);

if($getNew){
    echo json_encode(array(
        'isok'=>true,
        'min'=>$min,
        'res'=>$row,
    ));
}else{

    echo json_encode(array(
        'isnook'=>false
    ));

}
?>