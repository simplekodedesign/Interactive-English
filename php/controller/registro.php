<?php
	require("db_connection.php");

	Connection::connect();

	class Response{
		var $status;
		var $message;

		function Response(){
			$this->status = 0;
			$this->message = "";
		}
	}

	$resp = new Response();

	$resultado = Connection::request("select Nu_Identificacion from p020_institucion where Nb_Institucion like '".$_POST["nombre_inst"]."'");
	if($resultado->rowCount()>0){
		//revisar el pin
		$resultado = Connection::request("select id,estatus,Nu_Identificacion from codigos where pin like '".$_POST["pin"]."'");
		if($resultado->rowCount()>0){
			$result = $resultado->fetch(PDO::FETCH_ASSOC);
			$nu_identificacion = $result["Nu_Identificacion"];

			if($result["estatus"]!="I"){
				$resultado = Connection::request("select Tx_Email from m210_usuario where Tx_Email like '".$_POST["nb_usuario"]."'");
				if(!($resultado->rowCount()>0)){
					if($_POST["email"]==$_POST["email2"]&&$_POST["password"]==$_POST["password2"]){
						try{
							Connection::request("insert into m220_alumno (Nb_Apellido,Nb_Alumno,Nb_ApellidoRepre,Nb_Representante,Tx_Email,St_Alumno) values ('".$_POST["primer_apellido_est"]."','".$_POST["primer_nombre_est"]."','".$_POST["primer_apellido_repre"]."','".$_POST["primer_nombre_repre"]."','".$_POST["email"]."','A')");
							$id_alumno = Connection::get_last_id();
							Connection::request("insert into m210_usuario (Co_Alumno,Nu_Identificacion,Co_Rol,Tx_Email,Tx_Clave,St_Session,Tx_Url,Fe_Status) values (".$id_alumno.",'".$nu_identificacion."',1,'".$_POST["nb_usuario"]."','".password_hash($_POST["password"], PASSWORD_DEFAULT)."',0,'https://c21english.com/img/perfil/users/man1.svg','".date("Y-m-d")."')");
							$id_usuario = Connection::get_last_id();
							Connection::request("insert into t080_usuario_institucion (Co_Usuario,Nu_Identificacion,Fe_Ingreso) values (".$id_usuario.",'".$nu_identificacion."','".date("Y-m-d")."')");
							Connection::request("insert into t090_usuario_nivel (Co_Usuario,Co_Nivel,Progreso,Se_Actual,Te_Actual,Horas,Le_Actual) values (".$id_usuario.",1,0,1,1,0,'#')");
							Connection::request("update codigos set estatus = 'I' where id = ".$result["id"]);
							$resp->status = 1;
							$resp->message = "Te has registrado exitosamente";
						}catch(Exception $e){
							$resp->status = -5;
							$resp->message = $e->getMessage();
						}
					}else{
						$resp->status = -4;
						$resp->message = "Error al verificar el correo o la contraseña";
					}
				}else{
					$resp->status = -6;
					$resp->message = "El nombre de usuario ya está siendo utilizado";	
				}
				
			}else{
				$resp->status = -2;
				$resp->message = "El Pin indicado ya ya está siendo utilizado";	
			}
		}else{
			$resp->status = -1;
			$resp->message = "Pin inconrrecto";
		}	
	}else{
		$resp->status = -3;
		$resp->message = "La institucion no se encuentra registrada";
	}
	echo json_encode($resp);
?>