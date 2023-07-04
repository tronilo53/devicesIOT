<?php
    
    require_once 'cors.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

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
            /*$last_id = $pdo -> lastInsertId();
            $stmt = $pdo -> prepare('SELECT * FROM users WHERE id = ?');
            $stmt -> execute([ $last_id ]);
            $res = $stmt -> fetchAll();*/
            try {
                $mail->isSMTP();
                $mail->SMTPAuth = true;
                // Datos personales
                $mail->Host = "smtp.ionos.es";
                $mail->Port = "587";
                $mail->Username = "info@freelsdevcamp.es";
                $mail->Password = "@Shutdown@";
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
                // Remitente
                $mail->setFrom('info@freelsdevcamp.es', 'freelsdevcamp');
                // Destinatario, opcionalmente también se puede especificar el nombre
                $mail->addAddress($params->email, $params->name);
                $mail->isHTML(true);
                // Asunto
                $mail->Subject = 'Verificación de Cuenta';
                // Contenido HTML
                $mail->Body = '
                    
                ';
                $mail->AltBody = 'El texto como elemento de texto simple';
                // Agregar archivo adjunto
                $mail->addAttachment("/home/user/Desktop/ejemplodeimagen.png", "ejemplodeimagen.png");
            } catch (Exception $e) {
                $res = [ 'res' => 'error: ' . $e ];
            }
        }
    }
    
    header('Content-Type: application/json');

    echo json_encode($res);
?>