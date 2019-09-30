<?php
  //Conexion a Base de Datos

  /*
    En la clase Connection, al poseer tanto propiedades como metodos
    estaticos no es necesario instanciar la clase, sus metodos se usan
    como metodos de clase y la conexion se trabaja mediante una variable
    de clase llamada $dbConnection
  */

  class Connection{
    //Datos Conexion
    private static $dbHost = "localhost";             //Nombre del Host
    private static $dbName = "prueba";                //Nombre de la Base de Datos
    private static $dbUser = "root";                  //Nombre de Usuario para el phpmyadmin
    private static $dbPass = "mysql";                 //Contraseña para phpmyadmin

    //Variable que guardara la conexion a la Base de Datos
    private static $dbConnection;

    //Metodo que establece la conexion a la Base de Datos
    public static function connect(){
      try {
          self::$dbConnection = new PDO('mysql:host='.self::$dbHost.';dbname='.self::$dbName,self::$dbUser,self::$dbPass);
          self::$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          self::$dbConnection->exec("set character set UTF8");
      } catch (PDOException $e) {
          die("¡Error!: " . $e->getMessage());
      }
    }

    //Metodo para realizar una consulta a la Base de Datos
    public static function request($sql){
      try {
          $query=self::$dbConnection->prepare($sql);
          $query->execute();
          return $query;
      } catch (PDOException $e) {
          die("¡Error!: " . $e->getMessage());
      }
    }
  }
?>
