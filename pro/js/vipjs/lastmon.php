<?php
$con = mysqli_connect('localhost', 'root', 'root','mvpro');



$sqladd= "  SELECT   *  from  `user` order by  `money` asc";

$res = mysqli_query($con,$sqladd);
$row=mysqli_fetch_assoc($res);

echo(json_encode(array(

    'top'=>$row

)) )

?>