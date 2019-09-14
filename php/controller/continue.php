<?php
  require("db_connection.php");
  session_start();
  //Realizar conexion a base de datos
  Connection::connect();
  /*
    Revisar que la secuencia actual del usuario sea igual a la coordenada de
    la leccion que acaba de aprobar para realizar el avance
  */
  $_SESSION["nu_lec_aprob"]++;
  if($_SESSION["se_actual"]==$_GET["co"]){
    //Aumento en la secuencia del usuario
    $_SESSION["se_actual"]++;
    //Buscar el url de la siguiente leccion para actualizar el url de la leccion actual de usuario
    $results=Connection::request("select Les_Sig from p070_orden where Co_Orden=".$_GET["co"]);
    if($results->rowCount()>0){
      while($res=$results->fetch(PDO::FETCH_ASSOC)){
        $_SESSION["le_actual"]=$res["Les_Sig"];
      }
    }

    $_SESSION["progreso"]+=0.68;
    //Actualizar el avance del usuario en base de datos
    $results=Connection::request("update t090_usuario_nivel set Progreso=".$_SESSION["progreso"].",Se_Actual=".$_SESSION["se_actual"].",Te_Actual=".$_SESSION["te_actual"].",Le_Actual='".$_SESSION["le_actual"]."' where Co_Usuario=".$_SESSION["co_usuario"]);
  }
?>
