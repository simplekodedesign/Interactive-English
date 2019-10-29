<?php
  //Buscar el titulo de la leccion
  $results=Connection::request("select Co_Juego,Nb_Lesson from p070_orden where Co_Orden=".$_GET["co"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      echo "<div class='titles' id='titles'>
      <h1>".$res["Nb_Lesson"]."</h1>
      <span>Translate</span>
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

  class Data {
    public $compare = [];
    public $message = [];
  }

  $data = new Data();

  //Buscar los elementos a iterar
  $compare=array();
  $message=array();
  $total=0;
  $results=Connection::request("select Nb_Ask , Nb_Comparar from t020_juego_tema where Co_Orden=".$_GET["co"]." order by rand()");
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $new = array_push($data->message, $res["Nb_Ask"]); // mensaje
      $new = array_push($data->compare, $res["Nb_Comparar"]); // validacion a comparar
      // $message[]=$res["Nb_Ask"];
      // $compare[]=$res["Nb_Comparar"];
      $total+=1; //total de elementos
    }
  }

  echo"<link rel='stylesheet' href='../../Lessons/Translate into spanish/style.css?q=".$q."'>
  <div class='theme'>
    <div class='cont_abc' id='cont_all'>
      <div class='letra 0 active' id='phrase'></div>
    </div>
  </div>
  <div class='buttons'>
    <div class='input'>
      <input type='text' placeholder='Write here' class='write' id='write'>
      <i class='fa fa-pencil' aria-hidden='true'></i>
    </div>
    <span class='lessonButton' id='btnCheck'>Check</span>
  </div>
  <script type='text/javascript' src='../../Lessons/Translate into spanish/Javascript.js?q=".$q."'></script>";
?>

<script type="text/javascript">
  var data = <?php echo json_encode($data)?>;
  console.log(data);
  var total = data.compare.length > 20 ? 20: data.compare.length;
  var cord=<?php echo $_GET["co"]?>;
</script>
