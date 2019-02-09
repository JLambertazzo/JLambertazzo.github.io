<?php
  $username = $_POST["username"];
  $email = $_POST["email_address"];
  $password = $_POST["password"];
  $confirm_password = $_POST["confirm_password"];
  if($password == $confirm_password){
    echo $username + "   " + $password;
  }
?>
