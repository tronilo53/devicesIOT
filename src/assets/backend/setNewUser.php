<?php
    
    require_once 'cors.php';

    $json = file_get_contents('php://input');
    $params = json_decode($json);

    require_once 'connection.php';

    $stmt = $pdo -> prepare( 'SELECT COUNT(*) FROM users WHERE email = ?' );
    $stmt -> execute([ $params->email ]);
    if( $stmt -> fetchColumn() > 0 ) $res = [ "res" => "User exist" ];
    else {
        $stmt = $pdo -> prepare('INSERT INTO users(name,email) VALUES(?,?)');
        $stmt -> execute([ $params->name, $params->email ]);
        if( !$stmt ) $res = [ 'res' => 'Error to Insert the User' ];
        else {
            $last_id = $pdo -> lastInsertId();
            $stmt = $pdo -> prepare('SELECT id,name,email,creation,status,role,avatar FROM users WHERE id = ?');
            $stmt -> execute([ $last_id ]);
            $res = $stmt -> fetchAll();
        }
    }
    
    header('Content-Type: application/json');

    echo json_encode($res);
?>