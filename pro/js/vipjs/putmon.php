<?php

$min = $_GET["min"];
$name =$_GET["name"];
// $password = $_GET["password"];
// echo(json_encode($name,$min ));
$con = mysqli_connect('localhost', 'root', 'root','mvpro');

$sql = "SELECT * FROM `user` WHERE `name`='$name'";
$res = mysqli_query($con,$sql);
$row=mysqli_fetch_assoc($res);



$sqladd= " UPDATE user SET money='$min' WHERE name='$name'";
$getNew = mysqli_query($con,$sqladd);

if($getNew){
    echo json_encode(array(
        'isadd'=>true,
        'min'=>$min,
        'res'=>$row,
    ));
}else{

    echo json_encode(array(
        'isadd'=>false
    ));

}
?>