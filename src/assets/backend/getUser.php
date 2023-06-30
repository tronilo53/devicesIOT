<?php
    
    require_once 'cors.php';
    require_once 'connection.php';

    $postdata = file_get_contents("php://input");
    if(isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata, true);

        $res = { "res" => $request['id'] };
    }else $res = { "res" => "Sin parámetros" };

    echo json_encode($res);
?>