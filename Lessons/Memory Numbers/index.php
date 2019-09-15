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

  for($i=0;$i<15;$i++){
    $cards[]="<div class='card'>
                    <div class='block'></div>
                    <audio src='../../aud/categories/numbers/Cardinal Numbers/".($i+1).".mp3'></audio>
                    <p>".($i+1)."</p>
                </div>";
  }
  for($i=0;$i<15;$i++){
    $cards[]="<div class='card'>
                    <div class='block'></div>
                    <audio src='../../aud/categories/numbers/Cardinal Numbers/".($i+1).".mp3'></audio>
                    <p>".($i+1)."</p>
                </div>";
  }

  $b=true;
  while($b){
    $r=rand(0,34);
    echo $cards[$r];
    $cards[$r]="";
    $b=false;
    for($i=0;$i<35;$i++)if($cards[$i]!="")$b=true;
  }

  echo "    <div class='guardian'></div>
    </div>
    <audio src='' id='cardAud' style='display:none;'></audio>
    <script type='text/javascript' src='../../Lessons/Memory Numbers/Javascript.js?q=".$q."'></script>";
?>
<script type="text/javascript">
  var cord=<?php echo $_GET["co"]?>;
</script>
