<?php
  //Buscar el titulo de la leccion
  $results=Connection::request("select Co_Juego,Nb_Lesson,Co_Tema from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
      <h1>".$res["Nb_Lesson"]."</h1>
      <span id='said'>Match the image and text</span>
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
  //Buscar los elementos a iterar
  $urlImg=array();
  $urlAud=array();
  $compare=array();
  $total=0;
  $results=Connection::request("select Nb_audio , Nb_imagenes , Nb_Comparar from t020_juego_tema where Co_Orden=".$_GET["co"]." order by rand()");
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $compare[]=$res["Nb_Comparar"]; //validacion a comparar
      $results2=Connection::request("select Tx_Url from p090_imagenes where Nb_imagenes like '".$res["Nb_imagenes"]."'");
      if($results2->rowCount()>0){
        while($res2=$results2->fetch(PDO::FETCH_ASSOC)){
          $urlImg[]=$res2["Tx_Url"]; //imagenes
        }
      }
      $results2=Connection::request("select Tx_Url from p110_audio where Nb_audio like '".$res["Nb_audio"]."'");
      if($results2->rowCount()>0){
        while($res2=$results2->fetch(PDO::FETCH_ASSOC)){
          $urlAud[]=$res2["Tx_Url"]; //audios;
        }
      }
      $total+=1; //total de elementos
    }
  }

  $compare2=array();
  for($i=0;$i<$total;$i++)$compare2[]=$compare[$i];

  echo "<link rel='stylesheet' href='../../Lessons/Connect with image/style.css?q=".$q."'>
      <div class='playground'>
      <div class='col' id='txts'>";
  $b=true;
  while($b){
    do{
      $r=rand(0,($total-1));
    }while($compare[$r]=="");
    echo "<div class='itemCon item'>
            <p class='text'>".$compare[$r]."</p>
            <audio src='".$urlAud[$r]."'></audio>
          </div>";
    $compare[$r]="";
    $b=false;
    for($i=0;$i<$total;$i++)if($compare[$i]!="")$b=true;
  }
  echo "<div class='guardian'></div>
        </div>
        <div class='col'>";
  $b=true;
  while($b){
    do{
      $r=rand(0,($total-1));
    }while($compare2[$r]=="");
    echo "<div class='img'>
            <img src='".$urlImg[$r]."' alt='".$compare2[$r]."' class='item'>
            <audio src='".$urlAud[$r]."'></audio>
        </div>";
    $compare2[$r]="";
    $b=false;
    for($i=0;$i<$total;$i++)if($compare2[$i]!="")$b=true;
  }
  echo "<div class='guardian'></div>
        </div>
        </div>
        <script type='text/javascript' src='../../Lessons/Connect with image/javascript.js?q=".$q."'></script>";
?>

<script type="text/javascript">
  var tot = <?php echo $total?>;
  var cord=<?php echo $_GET["co"]?>;
  var co_tema = <?php echo $co_tema?>;
</script>
