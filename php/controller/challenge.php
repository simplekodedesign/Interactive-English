<?php
  function urlBtnSig($co,$lsig){
    $results=Connection::request("select * from p070_orden where Co_Orden=".$co);
    if($results->rowCount()>0){
      while($res=$results->fetch(PDO::FETCH_ASSOC)){
        $coTema=$res["Co_Tema"];
      }
    }
    $end=0;
    $b=false;
    $ini=0;
    $results=Connection::request("select * from p070_orden where Co_Tema=".$coTema);
    if($results->rowCount()>0){
      while($res=$results->fetch(PDO::FETCH_ASSOC)){
        if(!$b){
          $b=true;
          $ini=$res["Co_Orden"];
        }
        $end=$res["Co_Orden"];
      }
    }
    if($co==$end&&$_SESSION["se_actual"]>$end&&$_SESSION["te_actual"]==$coTema){
        if(!isset($_SESSION["reto"]))$_SESSION["reto"]=0;
        return "php/views/challenge.php?ini=".$ini."&end=".$end."&th=".$coTema;
    }else{
      return $lsig;
    }
  }
?>
