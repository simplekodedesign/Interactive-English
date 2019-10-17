<?php
  function urlBtnSig($co,$lsig){
    //buscar el tema de la leccion actual
    $results=Connection::request("select Co_Tema from p070_orden where Co_Orden=".$co);
    if($results->rowCount()>0){
      while($res=$results->fetch(PDO::FETCH_ASSOC)){
        $coTema=$res["Co_Tema"];
      }
    }
    $end=0;
    $b=false;
    $ini=0;
    //buscar la primera y ultima leccion del tema
    $results=Connection::request("select * from p070_orden where Co_Tema=".$coTema);
    if($results->rowCount()>0){
      while($res=$results->fetch(PDO::FETCH_ASSOC)){
        //primera leccion del tema
        if(!$b){
          $b=true;
          $ini=$res["Co_Orden"];
        }
        //ultima leccion del tema
        $end=$res["Co_Orden"];
      }
    }

    //saber si se debe revisar un reto
    if($_SESSION["te_actual"]==$coTema&&$co==$end&&$_SESSION["se_actual"]>=$end){
      //buscar la informacion del reto actual del usuario
      $results = Connection::request("select St_Reto,Co_Tema from t040_retos where Co_Usuario = ".$_SESSION["co_usuario"]);
      if($results->rowCount()>0){
        $data = $results->fetch(PDO::FETCH_ASSOC);
        //saber si el reto esta activo
        if($data["Co_Tema"]<$_SESSION["te_actual"]){ //saber si es un reto anterior
          return $lsig;
        }else if($data["Co_Tema"]==$_SESSION["te_actual"]){ //saber si el reto pertenece al tema que esta terminando
            if(!isset($_SESSION["reto"]))$_SESSION["reto"]=0;
            return "challenge.php?ini=".$ini."&end=".$end."&th=".$coTema;
        }else{
          return "home.php?url=lessons.php&th=".$_SESSION["te_actual"];
        }
      }
    }else{
      return $lsig;
    }
  }
?>
