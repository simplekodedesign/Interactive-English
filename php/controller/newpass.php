<?php
  require("db_connection.php");

  //Realizar conexion a base de datos
  Connection::connect();

  $results=Connection::request("update m210_usuario set Tx_Clave='".password_hash($_GET["np"],PASSWORD_DEFAULT)."' where Co_Usuario=".$_GET["cu"]);
  echo "<script>location='../../index.php?e=1'</script>";
?>
