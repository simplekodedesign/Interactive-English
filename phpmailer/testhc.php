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
$mail = new PHPMailer(true); // Solicitamos una instancia de la clase PHPMailer, el parámetro true es para que nos acepte los exceptions
try {
    $mail->SMTPDebug = 2; // Si no necesitamos un debug la comentamos, la usamos en modo de desarrollo. En producción lo comentamos
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
    $mail->addAddress('heberth.castillo@gmail.com'); //// Dirección del Destinatario
    $mail->isHTML(true);
    $mail->Subject = 'Esta es una prueba de email';
    $mail->Body = 'Texto del correo enviado desde <b>phpmailer</b>';
    // Attachments
    // $mail->addAttachment('./attachments/file.tar.gz');         // Add attachments
    //$mail->addAttachment('./attachments/image.jpg', 'new.jpg');    // Optional name
    $mail->send();
} catch (Exception $exception) {
    echo 'Algo salio mal ', $exception->getMessage();
}