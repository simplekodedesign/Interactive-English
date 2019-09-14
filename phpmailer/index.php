<?php
  /*
  Ojo, para que se pueda utilizar el envio desde Gmail, es necesario activar la opción de Acceso de Apps menos seguras
  Ir a Configuración -> Cuentas e Importación -> Otra configuración de la Cuenta de Google
  Luego seleccionar del menú izquierdo, la opción de Seguridad
  Seguidamente, Vamos a la sección "Accesso de apps menos seguras" y hacemos clic en "Activar el acceso (no se recomienda)"

  En caso de dar error de no poder autenticar:
  Go to https://accounts.google.com/DisplayUnlockCaptcha and click Continue.
  */
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  require 'vendor/autoload.php';
  require 'Constantes.php';
  require "../php/controller/db_connection.php";

  Connection::connect();
  $results=Connection::request("select Co_Usuario,Co_Alumno from m210_usuario where Nb_Usuario like '".$_GET["nbUsuario"]."'");
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $co_usuario=$res["Co_Usuario"];
      $co_alumno=$res["Co_Alumno"];
    }
  }
  $email="";
  $results=Connection::request("select Nb_Apellido,Nb_Alumno,Tx_Email from m220_alumno where Co_Alumno=".$co_alumno);
  if($results->rowCount()>0){
    while($res=$results->fetch(PDO::FETCH_ASSOC)){
      $name=$res["Nb_Alumno"];
      $surname=$res["Nb_Apellido"];
      $email=$res["Tx_Email"];
    }
  }
  if($email!=""){
    $subject="Recuperación de Contraseña Interactive English";
    $txt="<html>
                  <head>
                  </head>
                  <body>
                    <div style='margin: auto; text-align: center; text-shadow: 3px 3px 5px #FFB033'><h1 style='color: #FEAA08; font-size: 5em;'>Interactive English</h1></div>
                    <div style='margin: auto; text-align: center;'><p style='font-size: 2em;'>
                    Cordiales Saludos ".$name." ".$surname.", hemos procesado su solicitud pra el cambio de contraseña, su codigo de recuperacion de contraseña es: <br><br><b style='font-size: 1em; color: #007EFE;'>"
                    .$_GET["cod"]."</b><br><br> Le esperamos pronto para continuar en el camino del aprendizaje del ingles.<br><br><small style='color: #BEBDBA'><i>Equipo de Interactive English<br>Capacitese 21</i></small>
                    </p>
                    </div>
                  </body>
                </html>";

    try {
      $mail = new PHPMailer(true); // Solicitamos una instancia de la clase PHPMailer, el parámetro true es para que nos acepte los exceptions
      try {
          //$mail->SMTPDebug = 2; // Si no necesitamos un debug la comentamos, la usamos en modo de desarrollo. En producción lo comentamos
          $mail->isSMTP();
          $mail->Host = 'smtp.gmail.com';
          $mail->SMTPAuth = true;
          $mail->Username = 'c21english.01@gmail.com';
          $mail->Password = EMAIL_PASSWORD;  // Tomado del archivo Constantes.php
          $mail->SMTPSecure = 'tls';
          $mail->Port = 587;
          ## MENSAJE A ENVIAR
          $mail->setFrom('c21english.01@gmail.com', 'C21English Comunicaciones');  // Establecemos el remitente. Se recomienda usar la misma del username, esta para evitar conflictos para los sistema AntiSpam
          //$mail->addReplyTo("reply@yourdomain.com", "Reply"); ////En caso de que el usuario le de la opción de responder, esta es la dirección donde enviaría
          $mail->addAddress($email); //// Dirección del Destinatario
          $mail->isHTML(true);
          $mail->Subject = $subject;
          $mail->Body = $txt;
          // Attachments
          // $mail->addAttachment('./attachments/file.tar.gz');         // Add attachments
          // $mail->addAttachment('./attachments/image.jpg', 'new.jpg');    // Optional name
          $mail->CharSet='UTF-8';
          $mail->send();
          echo $co_usuario;
      } catch (Exception $exception) {
        echo $exception->getMessage()." ".$exception->getLine();
      }
    } catch (Exception $e) {
      echo "<script>alert('Error al enviar el correo')</script>";
    }
  }

?>
