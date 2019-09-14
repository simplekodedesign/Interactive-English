<?php
  //conexion a base de datos
  require("../controller/db_connection.php");
  Connection::connect();

  //iniciar sesion
  session_start();

  //actualizar datos estadisticas
  $results=Connection::request("update t010_bitacora set Nu_Lecciones=".$_SESSION["nu_lec_aprob"].", Hr_Salida='".(date("h").":".date("i").":".date("s"))."' where Co_Bitacora=".$_SESSION["co_bit"]);

  //actualizar estado de session
  $results=Connection::request("update m210_usuario set St_Session=0 where Co_Usuario=".$_SESSION["co_usuario"]);

  //eliminar las variables de session
  $_SESSION=array();

  //redireccionar a login
  echo "<script>location='../../index.php?c=1'</script>";
?>
