<?php
    
    require_once 'cors.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require './PHPMailer/PHPMailer.php';
    require './PHPMailer/SMTP.php';
    require './PHPMailer/Exception.php';

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
            $mail = new PHPMailer(true);
            // CONFIGURACION DEL SERVIDOR
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $mail->isSMTP();
            $mail->Host = "smtp.ionos.es";
            $mail->SMTPAuth = true;
            $mail->Username = "info@freelsdevcamp.es";
            $mail->Password = "@Shutdown@";
            //$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = "587";
            // CONFIGURACION DEL REMITENTE
            $mail->setFrom('info@freelsdevcamp.es', 'freelsdevcamp');
            // CONFIGURACION DEL DESTINATARIO
            $mail->addAddress($params->email, $params->name);
            // CONFIGURACION DEL CONTENIDO
            $mail->isHTML(true);
            $mail->CharSet = 'UTF-8';
            $mail->Encoding = 'base64';
            $mail->Subject = 'Verificación de Cuenta';
            $mail->Body = '
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Verificaci&oacute;n de cuenta</title>
                    <style>
                        * {
                            padding: 0;
                            margin: 0;
                            box-sizing: border-box;
                        }
                        a {
                            text-decoration: none;
                        }
                        .container {
                            text-align: center;
                            border: 1px solid lightgray;
                            width: 80%;
                            height: 100%;
                            margin-top: 100px;
                            margin-left: auto;
                            margin-right: auto;
                        }
                        .container .container__header {
                            width: 100%;
                            height: 100px;
                            display: flex;
                            flex-flow: row nowrap;
                            align-items: center;
                            background-color: rgb(34, 145, 219);
                        }
                        .container .container__header > div:first-child {
                            flex-grow: 1;
                        }
                        .container .container__header > div:nth-child(2) {
                            flex-grow: 1;
                        }
                        .container .container__header > div:nth-child(2) a, .container .container__header > div:nth-child(2) p {
                            color: white;
                            font-size: 1.2rem;
                            letter-spacing: 2px;
                        }
                        .container .container__header img {
                            width: 5rem;
                        }
                        .container .container__body {
                            padding: 30px 10px;
                        }
                        .container .container__body .btn {
                            display: block;
                            width: 15rem;
                            margin: 20px auto;
                            text-decoration: none;
                            color: white;
                            background-color: black;
                            padding: 10px 20px;
                            border-radius: 5px;
                            -webkit-border-radius: 5px;
                            -ms-border-radius: 5px;
                            -o-border-radius: 5px;
                            -moz-border-radius: 5px;
                        }
                        .container .container__body .btn:hover {
                            background-color: #494949;
                        }
                        .container .container__body .btn:active {
                            background-color: black;
                        }
                        .container .container__footer {
                            width: 100%;
                            padding: 30px 10px;
                            color: white;
                            text-align: center;
                            height: 100%;
                            background-color: rgb(34, 145, 219);
                        }
                        @media screen and (max-width: 706px) {
                            .container .container__header {
                                display: block;
                                height: 100%;
                                padding: 10px 0;
                            }
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="container__header">
                            <div>
                                <img src="https://freelsdevcamp.es/devicesIOT/src/assets/logo_small_icon_only.png" alt="logo_small_icon_only.png">
                            </div>
                            <div>
                                <p>freelsdevcamp.es</p>
                            </div>
                        </div>
                        <div class="container__body">
                            <h1>¡Hola ' . $params->name . '!</h1>
                            <h3>Vamos a verificar tu cuenta de devicesIOT</h3>
                            <p>Est&aacute;s a un paso m&aacute;s cerca de controlar tus dispositivos.</p>
                            <p>Para verificar tu cuenta, solo tienes que hacer click en el bot&oacute;n, nosotros nos encargamos del resto.</p>
                            <a class="btn" href="https://freelsdevcamp.es/devicesIOT/pages/verifyAccount.php?token=' . $token .'">Vamos All&aacute;</a>
                            <p><strong>Si usted no ha solicitado una cuenta en <i>devicesIOT</i> por favor, ignore este mensaje.</strong></p>
                            <p>Nos comprometemos continuamente a cumplir con las leyes de protección de datos aplicables y a garantizar un procesamiento justo y transparente de sus datos personales.
                            Lea nuestra declaración de privacidad, incluido un aviso de información y una política de protección de datos, para obtener información detallada sobre nuestro sitio web.</p>
                        </div>
                        <div class="container__footer">
                            <p>Se podrá responder al email info@freelsdevcamp.es, no obstante, se dará prioridad a las consultas de Soporte para una mayor fluidez y un mejor servicio de asistencia técnica.</p>
                            <p>Aténtamente: El equipo de administración de <i>devicesIOT</i> - freelsdevcamp.es</p>
                            <p style="margin-top: 10px;">freelsdevcamp.es</p>
                            <p>Derechos reservados &copy; <span id="date"></span></p>
                        </div>
                    </div>
                    <script type="text/javascript">
                        const date = document.getElementById("date");
                        date.innerHTML = new Date().getFullYear();
                    </script>
                </body>
                </html>';
            if( $mail->send() ) $res = [ 'res' => 'User insert successfully' ];
            else {
                $last_id = $pdo -> lastInsertId();
                $stmt = $pdo -> prepare('DELETE FROM users WHERE id = ?');
                $stmt -> execute([ $last_id ]);
                $res = [ 'res' => 'User not insert' ];
            }
        }
    }
    
    header('Content-Type: application/json');

    echo json_encode($res);
?>