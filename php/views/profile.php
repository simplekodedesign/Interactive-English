<?php

  //Buscar email
  $results=Connection::request("select Co_Alumno,Tx_Url from m210_usuario where Co_Usuario=".$_SESSION["co_usuario"]);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $coAlumno=$res["Co_Alumno"];
      $photo=$res["Tx_Url"];
    }
  }
  $results=Connection::request("select Co_Alumno,Nb_ApellidoRepre,Nb_Representante from m220_alumno where Co_Alumno=".$coAlumno);
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
  echo "<link rel='stylesheet' href='../../css/profile.css?q=".$q."'>
        <link rel='stylesheet' href='../../css/background.css?q=".$q."'>
        <div class='titles' id='titles'>
            <h1>This is your personal information:</h1>
        </div>


          <div class='container' id='profileScreen'>
            <div class='profilePics'>
              <div class='pic'>
                <img src='../../img/perfil/users/man1.svg' alt=''>
              </div>
              <div class='pic'>
                <img src='../../img/perfil/users/man2.svg' alt=''>
              </div>
              <div class='pic'>
                <img src='../../img/perfil/users/man3.svg' alt=''>
              </div>
              <div class='pic'>
                <img src='../../img/perfil/users/man4.svg' alt=''>
              </div>
              <div class='pic'>
                <img src='../../img/perfil/users/woman1.svg' alt=''>
              </div>
              <div class='pic'>
                <img src='../../img/perfil/users/woman2.svg' alt=''>
              </div>
              <div class='pic'>
                <img src='../../img/perfil/users/woman3.svg' alt=''>
              </div>
              <div class='pic'>
                <img src='../../img/perfil/users/woman4.svg' alt=''>
              </div>
              <div class='pic'>
                <img src='../../img/perfil/users/woman5.svg' alt=''>
              </div>
              <div class='pic'>
                <img src='../../img/perfil/users/woman6.svg' alt=''>
              </div>
            </div>

            <div class='infContainer'>

              <div class='profileInf'>
                <div id='selectedPic' class='pic'>
                  <img src='".$photo."' alt=''>
                </div>
                <table>
                  <tr>
                    <td class='variable'>First Name:</td>
                    <td class='value'><input type='text' name='FirstName' id='firstname' disabled value='".$_SESSION['name']."'></td>
                  </tr>
                  <tr>
                    <td class='variable'>Last Name:</td>
                    <td class='value'><input type='text' name='LastName' id='lastname' disabled value='".$_SESSION['surname']."'></td>
                  </tr>
                  <tr>
                    <td class='variable'>Parent:</td>
                    <td class='value'><input type='text' name='Parent' id='parent' disabled value='".$parent."'></td>
                  </tr>
                  <tr>
                    <td class='variable'>Email:</td>
                    <td class='value'><input type='text' name='Email' id='email' disabled value='".$email."'></td>
                  </tr>
                  <tr>
                    <td class='variable separation'></td>
                    <td class='value separation'></td>
                  </tr>
                </table>
              </div>

              <div class='profileInf passInfo'>
                <div class='pic'>
                  <img src='../../img/password.png' alt=''>
                </div>
                <table>
                <tr>
                  <td class='variable'>Old Password:</td>
                  <td class='value'><input type='text' name='OldPassword' id='OldPassword'></td>
                </tr>
                <tr>
                  <td class='variable'>New Password:</td>
                  <td class='value'><input type='text' name='NewPassword' id='NewPassword'></td>
                </tr>
                <tr>
                  <td class='variable'>Repeat Password:</td>
                  <td class='value'><input type='text' name='RepeatPassword' id='RepeatNewPassword'></td>
                </tr>
                </table>
              </div>

            </div>

          </div>
          <div class='buttons'>
            <span class='lessonButton' id='save'>Guardar</span>
          </div>
          <script type='text/javascript' src='../../js/profile.js?q=".$q."'></script>";
