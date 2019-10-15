<?php
  session_start();

  require("db_connection.php");
  //Realizar conexion a base de datos
  Connection::connect();
  //aumentar la cantidad de lecciones aprobadas en la seccion actual
  $_SESSION["nu_lec_aprob"]++;
  /*
    Revisar que la secuencia actual del usuario sea igual a la coordenada de
    la leccion que acaba de aprobar para realizar el avance
  */

  echo $_SESSION["se_actual"];
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

    $result = Connection::request("select Co_Orden from p070_orden where Co_Tema = ".$_SESSION["te_actual"]." order by Co_Orden desc");
    if($result->rowCount()>0){
      $res = $result->fetch(PDO::FETCH_ASSOC);
      $last = $res["Co_Orden"];
    }

    echo $last;

    if($_SESSION["se_actual"]>$last){
      $result = Connection::request("select Co_Tema,St_Reto from t040_retos where Co_Usuario = ".$_SESSION["co_usuario"]);
      if($result->rowCount()>0){
        $res = $result->fetch(PDO::FETCH_ASSOC);
        if($res["Co_Tema"]==$_SESSION["te_actual"]&&$res["St_Reto"]=="I"){
          Connection::request("update t040_retos set St_Reto = 'A' where Co_Usuario = ".$_SESSION["co_usuario"]);
          $_SESSION["reto_actual"] = true;
        }
      }
    }

    $_SESSION["progreso"]+=0.68;
    //Actualizar el avance del usuario en base de datos
    $results=Connection::request("update t090_usuario_nivel set Progreso=".$_SESSION["progreso"].",Se_Actual=".$_SESSION["se_actual"].",Te_Actual=".$_SESSION["te_actual"].",Le_Actual='".$_SESSION["le_actual"]."' where Co_Usuario=".$_SESSION["co_usuario"]);
  }
?>
