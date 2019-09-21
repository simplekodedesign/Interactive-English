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
  $results=Connection::request("select Nu_Identificacion from t080_usuario_institucion where Co_Usuario=".$_SESSION["co_usuario"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $nuIdentificacion=$res["Nu_Identificacion"];
    }
  }
  $results=Connection::request("select Img_Url from p020_institucion where Nu_Identificacion like '".$nuIdentificacion."'");
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $logoInst=$res["Img_Url"];
    }
  }

  echo "<link rel='stylesheet' href='../../css/profile.css'>
  <div class='titles' id='titles'>
      <h1>".$_SESSION['name']." ".$_SESSION['surname']."</h1>
      <span id='subtitle'>This is your personal information:</span>
  </div>



  <div class='cont_abc' id='cont_all'>

  <div class='pics' id='profilePic'>
    <img src='".$photo."' width='auto' height='100px' alt='Profile picture' id='userIconProfile'>
    <span class='lessonButton' id='pPicture'>Your picture</span>

    <div class='gallery'>
      <img src='../../img/perfil/users/avatar1.svg' class='icons' width='auto' height='50px' alt='../../img/perfil/users/avatar1.svg'>
      <img src='../../img/perfil/users/avatar2.svg' class='icons' width='auto' height='50px' alt='../../img/perfil/users/avatar2.svg'>
      <img src='../../img/perfil/users/avatar3.webp' class='icons' width='auto' height='50px' alt='../../img/perfil/users/avatar3.webp'>
      <img src='../../img/perfil/users/avatar4.svg' class='icons' width='auto' height='50px' alt='../../img/perfil/users/avatar4.svg'>
      <img src='../../img/perfil/users/avatar5.svg' class='icons' width='auto' height='50px' alt='../../img/perfil/users/avatar5.svg'>
    </div>
  </div>

  <div class='Info'>
    <div class='col'>
        <label class='labels' for='firstname'>Firstname</label>
        <label class='labels' for='lastname'>Lastname</label>
        <label class='labels' for='parent'>Parent</label>
        <label class='labels' for='birth'>Birth date</label>
        <label class='labels' for='name'>Email</label>
        <label class='labels' for='OldPassword'>Old password</label>
        <label class='labels' for='NewPassword'>New password</label>
        <label class='labels' for='RepeatNewPassword'>Repeat new password</label>
    </div>
    <div class='col' id='personalData'>
        <div class= 'input'><input type='text' placeholder='Firstname' class='write' id='firstname' disabled value='".$_SESSION['name']."'></div>
        <div class= 'input'><input type='text' placeholder='lastname' class='write' id='lastname' disabled value='".$_SESSION['surname']."'></div>
        <div class= 'input'><input type='text' placeholder='Parent' class='write' id='parent' disabled value='".$parent."'></div>
        <div class= 'input'><input type='text' placeholder='birth' class='write' id='birth' disabled value='".$birth."'></div>
        <div class= 'input'><input type='email' placeholder='email' class='write' id='email' disabled value='".$email."'></div>
        <div class= 'input'><input type='password' placeholder='Old password' class='write' id='OldPassword'></div>
        <div class= 'input'><input type='password' placeholder='New password' class='write' id='NewPassword'></div>
        <div class= 'input'><input type='password' placeholder='New password' class='write' id='RepeatNewPassword'></div>
    </div>
  </div>
  </div>

  <div class='buttons'>
  <span class='lessonButton' id='save' onclick='updateProfile()'>save</span>
  </div>

  <script type='text/javascript' src='js/profile.js'></script>";
?>
