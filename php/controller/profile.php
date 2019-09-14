<?php
  require("db_connection.php");
  Connection::connect();
  session_start();
  $message="";
  $b=0;
  $results=Connection::request("select Co_Alumno from m210_usuario where Co_Usuario=".$_SESSION["co_usuario"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $coAlumno=$res["Co_Alumno"];
    }
  }
  $_SESSION["user_icon"]=$_GET["ui"];
  $results=Connection::request("update m210_usuario set Tx_Url='".$_GET["ui"]."' where Co_Usuario=".$_SESSION["co_usuario"]);
  $message.="Icono de perfil cambiado con exito\n";
  if(isset($_GET["op"])&&isset($_GET["np"])){
    $results=Connection::request("select Tx_Clave from m210_usuario where Co_Usuario=".$_SESSION["co_usuario"]);
    if($results->rowCount()>0){
      while($res=$results->fetch(PDO::FETCH_ASSOC)){
        $op=$res["Tx_Clave"];
      }
    }
    if(password_verify($_GET["op"],$op)){
      $results=Connection::request("update m210_usuario set Tx_Clave='".password_hash($_GET["np"],PASSWORD_DEFAULT)."' where Co_Alumno=".$coAlumno);
      $b=1;
    }
  }
  if($b)$message.="Contraseña cambiada con exito";

  echo $message;
?>
