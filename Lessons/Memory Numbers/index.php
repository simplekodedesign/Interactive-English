<?php
  //Buscar el titulo de la leccion
  $results=Connection::request("select Co_Juego,Nb_Lesson from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
          <h1>".$res["Nb_Lesson"]."</h1>
          <span>Match the Image</span>
      </div>";
      $co_juego=$res["Co_Juego"];
    }
  }
  $results=Connection::request("select Tx_Help from p050_juego where Co_Juego=".$co_juego);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $gift=$res["Tx_Help"];
    }
  }

  //6*5
  echo "<link rel='stylesheet' href='../../Lessons/Memory Numbers/style.css?q=".$q."'>
  <div class='playground' id='container'>";

  $cards=array();

  $initialValue;
  $endingValue;

  
  if ($_GET["co"] == 6) {
    $initialValue = 64;
    $endingValue = 90;
  } else {
    $initialValue = 0;
    $endingValue = 15;
  }

  for($i = $initialValue; $i < $endingValue; $i++){
    $cards[]="<div class='card'>
                    <div class='block'></div>
                    <audio></audio>
                    <p>".($i+1)."</p>
                </div>";
  }
  for($i = $initialValue; $i < $endingValue; $i++){
    $cards[]="<div class='card'>
                    <div class='block'></div>
                    <audio src='../../aud/categories/numbers/Cardinal Numbers/".($i+1).".mp3'></audio>
                    <p>".($i+1)."</p>
                </div>";
  }

  $b=true;
  while($b){
    $r=rand(0, ($endingValue - $initialValue)*2);
    echo $cards[$r];
    $cards[$r]="";
    $b=false;
    for($i=0;$i<35;$i++)if($cards[$i]!="")$b=true;
  }

  echo "    <div class='guardian'></div>
    </div>";
    echo"
    <script type='text/javascript'>
      var cord = ".$_GET['co'].";
      var tot = ". ($endingValue - $initialValue).";
    </script>
    <audio src='' id='cardAud' style='display:none;'></audio>
    <script type='text/javascript' src='../../Lessons/Memory Numbers/Javascript.js?q=".$q."'></script>";
?>

