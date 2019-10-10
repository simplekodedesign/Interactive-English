<?php
  require("db_connection.php");
  //Realizar conexion a base de datos
  Connection::connect();
  //----------------CODIGO DE LECCIONES ANTERIOR Y SIGUIENTE-------------------------------------------
  $co_juego=array();
  $co_orden=array();
  $t=0;
  $results=Connection::request("select * from p070_orden");
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $co_orden[] = $res["Co_Orden"];
      $co_juego[] = $res["Co_Juego"];
      $t++;
    }
  }
  echo "<br>";
  $lant="";
  $lsig="";
  try {
    for($i=0;$i<$t;$i++){
      if($i-1>=0){
        $lant="?url=../../Lessons/".redirect($co_juego[$i-1])."/index.php&co=".$co_orden[$i-1];
      }else{
        $lant="#";
      }
      if($i+1<$t){
        $lsig="?url=../../Lessons/".redirect($co_juego[$i+1])."/index.php&co=".$co_orden[$i+1];
      }else{
        $lsig="#";
      }
      $results2=Connection::request("update p070_orden set Les_Ant='".$lant."' , Les_Sig='".$lsig."' where Co_Orden=".$co_orden[$i]);
    }
    echo "Listo";
  } catch (\Exception $e) {
    die("ha ocurrido un error");
  }

  //------------ESTA FUNCION ME LA COPIE DE ROUTING.JS-------------------------------------------
  function redirect($game){
    switch($game){
      case "1": return "Video";
      case "2": return "ABC";
      case "3": return "Click the right letters";
      case "4": return "Pronunciation2";
      case "5": return "Say the correct word";
      case "6": return "Pronunciation of Vowels";
      case "7": return "Pronunciation of Consonants";
      case "8": return "Vocabulary";
      case "9": return "Select the correct option";
      case "10": return "Connect";
      case "11": return "Translate into spanish";
      case "12": return "Vocabulary txt";
      case "13": return "Memory Numbers";
      case "14": return "Write the correct txt";
      case "15": return "Say the correct txt";
      case "16": return "Select the right image";
      case "17": return "Write the right option";
      case "18": return "Memory";
      case "19": return "Speak Memory";
      case "20": return "Connect with image";
      case "21": return "Unscramble";
      case "22": return "Vocabulary Directions";
      case "23": return "Directions";
      default: return "";
    }
  }
?>
