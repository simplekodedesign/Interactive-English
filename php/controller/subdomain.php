<?php

  //inicio de sesion
  ini_set("session.cookie_lifetime","0");
  ini_set("session.gc_maxlifetime","0");
  session_start();

  require("db_connection.php");

  class Colegio {
    public $img_institucion = "";
    public $color_institucion = "";
  }

  $data = new Colegio();

  //Realizar conexion a base de datos
  Connection::connect();
  //buscar la imagen y el color
  
  $url = explode(".", $_SERVER['HTTP_HOST'])[0];
  $results = Connection::request("select I.color,I.Img_Url from p020_institucion I where I.Img_Url = '".$url."'");
  if($results->rowCount() > 0){
    $res=$results->fetch(PDO::FETCH_ASSOC);
    $data->img_institucion = $res["Img_Url"];
    $data->color_institucion =$res["color"];
  }

  echo json_encode($data);
?>