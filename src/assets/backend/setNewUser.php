<?php
    
    require_once 'cors.php';

    $json = file_get_contents('php://input');
    $params = json_decode($json);

    require_once 'connection.php';

    $stmt = $pdo -> prepare( 'SELECT COUNT(*) FROM users WHERE email = ?' );
    $stmt -> execute([ $params->email ]);
    if( $stmt -> fetchColumn() > 0 ) $res = [ "res" => "User exist" ];
    else {
        $token = bin2hex( openssl_random_pseudo_bytes( 200 ) );
        $password_hash = password_hash( $params->password, PASSWORD_DEFAULT, [ 'cost' => 15 ] );
        $stmt = $pdo -> prepare('INSERT INTO users(name,email,password,token) VALUES(?,?,?,?)');
        $stmt -> execute([ $params->name, $params->email, $password_hash, $token ]);
        if( !$stmt ) $res = [ 'res' => 'Error to Insert the User' ];
        else {
            $last_id = $pdo -> lastInsertId();
            $stmt = $pdo -> prepare('SELECT * FROM users WHERE id = ?');
            $stmt -> execute([ $last_id ]);
            $res = $stmt -> fetchAll();
        }
    }
    
    header('Content-Type: application/json');

    echo json_encode($res);
?>