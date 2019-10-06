<?php

  //inicio de sesion
  ini_set("session.cookie_lifetime","0");
  ini_set("session.gc_maxlifetime","0");
  session_start();

  require("db_connection.php");

  //Realizar conexion a base de datos
  Connection::connect();

  $user=htmlentities(addslashes($_POST["user"]));
  $results=Connection::request("select Tx_Clave,St_Session from m210_usuario where Tx_Email like '".$user."'");
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $pass=$res["Tx_Clave"];
      $stSession=$res["St_Session"];
    }
  }else{
    echo "<script>window.location='https://www.c21english.com/index.php?e=2'</script>";
  }

  if(password_verify($_POST["pass"],$pass)){
    $_SESSION["user"]=$user;
    //buscar codigo de alumno y de codigo de usuario
    $results=Connection::request("select Co_Usuario,Co_Alumno,Tx_Url from m210_usuario where Tx_Email like '".$user."'");
    if($results->rowCount()>0){
      while($res=$results->fetch(PDO::FETCH_ASSOC)){
        $_SESSION["co_usuario"]=$res["Co_Usuario"];
        $_SESSION["user_icon"]=$res["Tx_Url"];
        $coAlumno=$res["Co_Alumno"];
      }
    }
      //guardar datos personales del usuario en variables de sesion
      $results=Connection::request("select Nb_Apellido,Nb_Alumno from m220_alumno where Co_Alumno=".$coAlumno);
      if($results->rowCount()>0){
        while($res=$results->fetch(PDO::FETCH_ASSOC)){
          $_SESSION["name"]=$res["Nb_Alumno"];
          $_SESSION["surname"]=$res["Nb_Apellido"];
        }
      }
      //guardar datos del usuario respecto a su avance en el sistema en variables de sesion
      $results=Connection::request("select Progreso,Se_Actual,Te_Actual,Le_Actual from t090_usuario_nivel where Co_Usuario=".$_SESSION["co_usuario"]);
      if($results->rowCount()>0){
        while($res=$results->fetch(PDO::FETCH_ASSOC)){
          $_SESSION["progreso"]=$res["Progreso"];
          $_SESSION["se_actual"]=$res["Se_Actual"];
          $_SESSION["te_actual"]=$res["Te_Actual"];
          $_SESSION["le_actual"]=$res["Le_Actual"];
        }
      }
      //guardar datos para estadisticas"
      $results=Connection::request("insert into t010_bitacora (Co_Usuario,Fe_Ejecucion,Hr_Entrada,Hr_Salida,Nu_Lecciones) values (".$_SESSION["co_usuario"].",'".(date("Y")."-".date("m")."-".date("d"))."','".(date("h").":".date("i").":".date("s"))."','',0)");
      if($results->rowCount()>0){
        $_SESSION["nu_lec_aprob"]=0;
      }

      $results=Connection::request("select Co_Bitacora from t010_bitacora where Co_Usuario=".$_SESSION["co_usuario"]);
      if($results->rowCount()>0){
        while($res=$results->fetch(PDO::FETCH_ASSOC)){
          $_SESSION["co_bit"]=$res["Co_Bitacora"];
        }
      }

      //Revisar si es necesario activar algun reto al usuario
      $results=Connection::request("select Fe_Ejecucion from t040_retos where Co_Usuario=".$_SESSION["co_usuario"]);
      if($results->rowCount()>0){
        while($res=$results->fetch(PDO::FETCH_ASSOC)){
          $feEjecucion=$res["Fe_Ejecucion"];
        }
      }
      if(strtotime(date("d-m-Y",time()))>=strtotime(date($feEjecucion,time()))){
        Connection::request("update t040_retos set St_Reto='A' where Co_Usuario=".$_SESSION["co_usuario"]);
        $results = Connection::request("select Co_Reto from t040_retos where Co_Usuario = ".$_SESSION["co_usuario"]);
        if($results->rowCount()>0){
          while($result = $results->fetch(PDO::FETCH_ASSOC)){
            $_SESSION["reto_actual"] = $result["Co_Reto"];
          }
        }
      }

      $results=Connection::request("update m210_usuario set St_Session=1 where Co_Usuario=".$_SESSION["co_usuario"]);

      echo "<script>window.location='../views/home.php'</script>";
  }else{
    echo "<script>window.location='https://www.c21english.com/index.php?e=2'</script>";
  }

?>
