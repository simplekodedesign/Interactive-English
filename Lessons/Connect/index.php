<?php
  //Buscar el titulo de la leccion
  $results=Connection::request("select Co_Juego,Nb_Lesson from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
         <h1>".$res["Nb_Lesson"]."</h1>
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
  //Buscar opciones
  $en=array();
  $es=array();
  $t=0;
  $results=Connection::request("select Nb_Ask,Nb_Comparar from t020_juego_tema where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $t++;
      $en[]="<p class='text ".$t."'>".$res["Nb_Ask"]."</p>";
      $es[]="<p class='text ".$t."'>".$res["Nb_Comparar"]."</p>";
    }
  }

  echo "<link rel='stylesheet' href='../../Lessons/Connect/connect.css?q=".$q."'>
  <div class='playground' id='container'>
  <div class='column' id='esp'>";
  $b=true;
  while($b){
    do{
      $r=rand(0,($t-1));
    }while($es[$r]=="");
    echo $es[$r];
    $es[$r]="";
    $b=false;
    for($i=0;$i<$t;$i++)if($es[$i]!="")$b=true;
  }
  echo "<div class='guardian'></div>
      </div>
      <div class='column' id='eng'>";
  $b=true;
  while($b){
    do{
      $r=rand(0,($t-1));
    }while($en[$r]=="");
    echo $en[$r];
    $en[$r]="";
    $b=false;
    for($i=0;$i<$t;$i++)if($en[$i]!="")$b=true;
  }
  echo "<div class='guardian'></div>
      </div>
  </div>
  <script type='text/javascript' src='../../Lessons/Connect/connect.js?q=".$q."'></script>";

?>

<script>
  var tot = <?php echo $t;?>;
  var cord=<?php echo $_GET["co"]?>;
</script>
