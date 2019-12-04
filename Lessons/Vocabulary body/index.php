<?php
  //Buscar el titulo de la leccion
  $results=Connection::request("select Co_Juego,Nb_Lesson,Co_Tema from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
      <h1>".$res["Nb_Lesson"]."</h1>
      <span>Listen to the Vocabulary</span>
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


  class Data {
    public $urlImg = [];
    public $urlAud = [];
    public $compare = [];
    public $options = [];
  }

  $data = new Data();

  $total=0;
  $results=Connection::request("select Nb_audio , Nb_imagenes , Nb_Ask , Nb_Comparar from t020_juego_tema where Co_Orden=".$_GET["co"]);
  if($results->rowCount() > 0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $new = array_push($data->options, $res["Nb_Ask"]); //Opciones
      // $options[]=$res["Nb_Ask"]; //opciones
      $new = array_push($data->compare, $res["Nb_Comparar"]); //Validaciones a comparar
      // $compare[]=$res["Nb_Comparar"]; //validacion a comparar
      $results2=Connection::request("select Tx_Url from p090_imagenes where Nb_imagenes like '".$res["Nb_imagenes"]."'");
      if($results2->rowCount()>0){
        while($res2=$results2->fetch(PDO::FETCH_ASSOC)){
          $new = array_push($data->urlImg, $res2["Tx_Url"]); // Imágenes
          // $urlImg[]=$res2["Tx_Url"]; //imagenes
        }
      }
      $results2=Connection::request("select Tx_Url from p110_audio where Nb_audio like '".$res["Nb_audio"]."'");
      if($results2->rowCount()>0){
        while($res2=$results2->fetch(PDO::FETCH_ASSOC)){
          $new = array_push($data->urlAud, $res2["Tx_Url"]);
          // $urlAud[]=$res2["Tx_Url"]; //audios;
        }
      }
      $total+=1; //total de elementos
    }
  }

?>

<?php
echo"
    <link rel='stylesheet' href='../../Lessons/Vocabulary Body/style.css'>
    <div class='theme' id='theme'>
      <div class='buttonContainer' id='buttonContainer'>
      </div>
      <div class='cont'>
        <h3> Te faltan <span id='cont'></span> partes por descubrir</h3>
      </div>
      <div class='object' id='object'>
      </div>
      <audio id='audio'></audio>
      <span class='vocabulary' id='en'></span>
      <span class='vocabulary' id='es'></span>
    </div>
    <script type='text/javascript' src='../../Lessons/Vocabulary Body/Javascript.js'></script>";
?>

<script type="text/javascript">
   var data = <?php echo json_encode($data)?>;
   var cord= <?php echo $_GET["co"]?>;
   var co_tema = <?php echo $co_tema?>;
</script>
