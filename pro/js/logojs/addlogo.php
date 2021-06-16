<?php
$name = $_GET["name"];
$password = $_GET["password"];
$con = mysqli_connect('localhost', 'root', 'root','mvpro');
$sql = "SELECT * FROM `user` WHERE `name`='$name' ";
$res = mysqli_query($con,$sql);
$row=mysqli_fetch_assoc($res);


    if($row){
        echo json_encode(array(
            'isLogin'=>true
        ));

    }else{
        $sqladd= " INSERT INTO `user` (`name`, `password`) VALUES ('$name', '$password');";
        $getNew = mysqli_query($con,$sqladd);

        if($getNew){
            echo json_encode(array(
                'isLogin'=>false
            ));
        }else{
            echo json_encode(array(
                'isLogin'=>"失败"
            ));
        }
      
    };

?>

