<?php

  //Buscar email
  $results=Connection::request("select Co_Alumno,Tx_Url from m210_usuario where Co_Usuario=".$_SESSION["co_usuario"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $coAlumno=$res["Co_Alumno"];
      $photo=$res["Tx_Url"];
    }
  }
  $results=Connection::request("select Co_Alumno,Nb_ApellidoRepre,Nb_Representante,Fe_Nacimiento from m220_alumno where Co_Alumno=".$coAlumno);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $parent=$res["Nb_Representante"]." ".$res["Nb_ApellidoRepre"];
      $birth=$res["Fe_Nacimiento"];
    }
  }
?>

<div class='titles' id='titles'>
  <h1>Premios</h1>
  <span>¡Sigue aprendiendo para ganar premios increíbles!</span>
</div>

<link rel="stylesheet" href="../../css/awards.css?q=<?php echo $q?>">
<div class="container" id="premios">
  <div class="premio">
    <img src="../../img/default.svg">
    <div class="cover">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div class="premio">
    <img src="../../img/default.svg">
    <div class="cover">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div></div>
</div>
<script>
  var COTEMA = <?php echo $_SESSION["te_actual"];?>;
</script>
<script src="../../js/awards.js"></script>
