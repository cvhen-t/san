<?php

$name = $_GET["name"];
$password = $_GET["password"];

$con = mysqli_connect('localhost', 'root', 'root','mvpro');
// mysql_select_db("shang");

$sql = "SELECT * FROM `user` WHERE `name`='$name' AND `password`='$password'";
// $sql = "SELECT * FROM `user` WHERE `name`='$username' AND `password`='$password'";
$res = mysqli_query($con,$sql);

$row=mysqli_fetch_assoc($res);
if($row){
    echo json_encode(
        array( 'flag'=>true,'user'=>$row)

    );
}else{
    echo json_encode(
        array( 'flag'=>false)

    );
}
// echo  json_encode($row);








?>
