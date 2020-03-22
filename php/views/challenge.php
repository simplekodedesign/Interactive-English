<?php
  //conexion a base de datos
  require("../controller/db_connection.php");
  Connection::connect();

  //iniciar sesion
  session_start();

  //en caso de ser el tercer reto realizar el avance de tema
  if($_SESSION["reto"] > 1){  //aqui deberian ser 3
    unset($_SESSION["reto"]);
    unset($_SESSION["reto_aplicado"]);
    if($_GET["th"]>=$_SESSION["te_actual"]){
      $_SESSION["te_actual"]++;
      $results=Connection::request("update t090_usuario_nivel set Te_Actual=".$_SESSION["te_actual"]." where Co_Usuario=".$_SESSION["co_usuario"]);
      $results=Connection::request("select * from t040_retos where Co_Usuario=".$_SESSION["co_usuario"]);
      if($results->rowCount()>0){
        while($res=$results->fetch(PDO::FETCH_ASSOC)){
          $feEjecucion=$res["Fe_Ejecucion"];
        }
      }
      $results=Connection::request("update t040_retos set Co_Reto=".$_SESSION["te_actual"].",Co_Tema=".$_SESSION["te_actual"].",Fe_Ejecucion='".date('d-m-Y', strtotime(date($feEjecucion))+(7*24*60*60*2))."',St_Reto='I' where Co_Usuario=".$_SESSION["co_usuario"]);
    }
    $results=Connection::request("select Les_Sig from p070_orden where Co_Orden=".($_SESSION["se_actual"]-1));
    if($results-> rowCount () > 0){
      $res=$results->fetch(PDO::FETCH_ASSOC);
      echo "<script>location='home.php".$res["Les_Sig"]."'</script>";
    }
  }else{
    //juegos que no se tomaran en encuentra
    $deny=[1, 2, 8, 12, 23, 22, 7];

    //generar leccion aleatoria
    do{
      $coa = rand($_GET["ini"],$_GET["end"]);

      //buscar el codigo de juego de la leccion seleccionada
      $results=Connection::request("select Co_Juego from p070_orden where Co_Orden=".$coa);
      if($results->rowCount()>0){
        while($res=$results->fetch(PDO::FETCH_ASSOC)){
          $coJuego=$res["Co_Juego"];
        }
      }
      $b=false;
      for($i = 0; $i < count($deny); $i++) {
        if($coJuego == $deny[$i])$b=true;
      }
      $b2=false;

      if (isset($_SESSION["reto_aplicado"])) {
        for($i = 0; $i < count($_SESSION["reto_aplicado"]); $i++) {
          if($coa == $_SESSION["reto_aplicado"][$i])$b2 = true;
        }
      }
    }while($b || $b2);

    //buscar el nombre del juego para redireccionar
    $results=Connection::request("select Nb_Juego from p050_juego where Co_Juego=".$coJuego);
    if($results->rowCount() > 0){
      while($res=$results->fetch(PDO::FETCH_ASSOC)){
        $nbJuego = $res["Nb_Juego"];
      }
    }

    //establecer la variable que controla el reto que se esta haciendo
    if(!isset($_SESSION["reto"])){
      $_SESSION["reto"] = 1;
    }
    $_SESSION["reto"]++;

    //guardar las lecciones que ya salieron para que no se repitan
    $_SESSION["reto_aplicado"][]=$coa;

    if ($_SESSION["reto"] > 3) {
      echo "<script>
      location='home.php?url=../../Lessons/".$nbJuego."/index.php&co=".$coa."&ini=".$_GET["ini"]."&end=".$_GET["end"]."&th=".$_GET["th"]."&aTema'
      </script>";
    }else{
      echo "<script>
      location='home.php?url=../../Lessons/".$nbJuego."/index.php&co=".$coa."&ini=".$_GET["ini"]."&end=".$_GET["end"]."&th=".$_GET["th"]."'
      </script>";
    }
  }
?>
