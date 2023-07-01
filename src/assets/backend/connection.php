<?php

    require_once 'config.php';

    $con = "mysql:host=$db_host;dbname=$db_name;charset=utf8";
    $pdo = new PDO( $con, $db_user, $db_pass );

    if($pdo) echo 'Conexión satisfactoria con BBDD freelsdevcamp.es';
    else echo 'No se ha podido conectar a la BBDD freelsdevcamp.es';

?>