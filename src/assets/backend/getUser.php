<?php
    
    require_once 'cors.php';

    $json = file_get_contents('php://input');
    $params = json_decode($json);

    require_once 'connection.php';

    $stmt = $pdo -> prepare( 'SELECT COUNT(*) FROM users WHERE id = ?' );
    $stmt -> execute([ $params->id ]);
    if( $stmt -> fetchColumn() > 0 ) {
        $stmt = $pdo -> prepare( 'SELECT * FROM users WHERE id = ?' );
        $stmt -> execute([ $params->id ]);
        $res = $stmt -> fetchAll();
    }else $res = [ 'res' => '404' ];
    
    header('Content-Type: application/json');

    echo json_encode($res);
?>