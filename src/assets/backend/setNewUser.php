<?php
    
    require_once 'cors.php';

    $json = file_get_contents('php://input');
    $params = json_decode($json);

    require_once 'connection.php';

    $stmt = $pdo -> prepare( 'SELECT COUNT(*) FROM users WHERE email = ?' );
    $stmt -> execute([ $params->email ]);
    if( $stmt -> fetchColumn() > 0 ) $res = [ "res" => "User exist" ];
    else $res = [ 'res' => 'User not exist' ];
    
    header('Content-Type: application/json');

    echo json_encode($res);
?>