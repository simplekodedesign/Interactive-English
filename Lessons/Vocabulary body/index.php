<?php
  //Buscar el titulo de la leccion
  $results=Connection::request("select Co_Juego,Nb_Lesson from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
      <h1>".$res["Nb_Lesson"]."</h1>
      <span>Listen to the Vocabulary</span>
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
  //Buscar los elementos a iterar
  $urlImg=array();
  $urlAud=array();
  $en=array();
  $es=array();
  $total=0;
  $results=Connection::request("select Nb_audio , Nb_imagenes , Nb_Ask , Nb_Comparar from t020_juego_tema where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $es[]=$res["Nb_Ask"]; //mensaje
      $en[]=$res["Nb_Comparar"]; //validacion a comparar
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

?>

<?php
echo"
    <link rel='stylesheet' href='../../Lessons/Vocabulary Body/style.css'>
    <div class='theme'>
      <select name='body' id='select'>
        <option value='1' selected>Front</option>
        <option value='2'>Back</option>
      </select>
      <object type='image/svg+xml' data='../../img/categories/the body/front.svg' alt='The body' id='svg1'></object>
      <object type='image/svg+xml' data='../../img/categories/the body/back.svg' alt='The body' id='svg2'></object>
      <audio id='audio'></audio>
      <span class='vocabulary' id='en'></span>
      <span class='vocabulary' id='es'></span>
    </div>
    <script type='text/javascript' src='../../Lessons/Vocabulary Body/Javascript.js'></script>";
?>