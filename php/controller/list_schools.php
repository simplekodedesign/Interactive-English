<?php
	require("db_connection.php");

	Connection::connect();

	$instituciones = [];

	$resultado = Connection::request("select * from p020_institucion");
	if($resultado->rowCount()>0){
		while($result = $resultado->fetch(PDO::FETCH_ASSOC)){
			$instituciones[] = $result["Nb_Institucion"];
		}
	}

	echo json_encode($instituciones);
?>