<?php
  
    $moneys = $_GET["moneys"];
    $name = $_GET["name"];
  
    $con = mysqli_connect('localhost', 'root', 'root','mvpro');
    $sql = "SELECT * FROM `user` WHERE vip= 1 AND name='$name'";
    $res = mysqli_query($con,$sql);
    $row=mysqli_fetch_assoc($res);

   
    
    
        if($row){
            echo json_encode(array(
                'isLogin'=>false
            ));
    
        }else{
            $sqladd= " UPDATE user SET vip=1 WHERE name='$name'";
            $getNew = mysqli_query($con,$sqladd);
    
            if($getNew){
                echo json_encode(array(
                    'isLogin'=>true
                ));
            }else{
                echo json_encode(array(
                    'isLogin'=>"充值失败"
                ));
            }
          
        };
    
    ?>



