<?php
  //Buscar el titulo de la leccion
  $results=Connection::request("select Co_Juego,Nb_Lesson,Co_Tema from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
          <h1>Encuentra las parejas</h1>
      </div>";
      $co_juego=$res["Co_Juego"];
      $co_tema = $res["Co_Tema"];
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
                    <audio></audio>
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

<script type="text/javascript">
  var co_tema = <?php echo $co_tema?>;
</script>