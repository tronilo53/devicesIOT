<?php require_once '../connection.php' ?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificación de cuenta</title>
    <link rel="stylesheet" href="../../bootstrap/css/bootstrap.min.css">
    <style>
        @font-face {
            font-family: 'Ysabeau SC';
            src: url('../../fonts/YsabeauSC/YsabeauSC-Regular.woff2') format('woff2'),
            url('../../fonts/YsabeauSC/YsabeauSC-Regular.woff') format('woff'),
            url('../../fonts/YsabeauSC/YsabeauSC-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        body {
            font-family: 'Ysabeau SC';
            background-color: lightsalmon;
        }
        .content {
            position: absolute;
            width: 80%;
            margin: 0 auto;
            left: 0;
            right: 0;
            top: 20%;
        }
        .logo {
            width: 15rem;
            position: absolute;
        }
        .title {
            font-size: 1.2rem;
            color: white;
            letter-spacing: 2px;
            text-align: center;
            margin-bottom: 20px;
        }
        .btn {
            width: 30%;
            margin: 0 auto;
        }
        h2, h4 {
            color: white;
        }
        .notFound {
            margin-top: 200px;
        }
        .footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            text-align: center;
            padding: 0 20px;
        }
        .footer p:nth-child(2) {
            color: white;
        }
        @media screen and (max-width: 640px) {
            .logo {
                left: 0;
                right: 0;
                margin: 0 auto;
                text-align: center;
            }
            .content {
                top: 25%;
            }
            .notFound {
                margin-top: 100px;
            }
        }
        @media screen and (max-width: 482px) {
            .btn {
                width: 60%;
            }
        }
    </style>
</head>
</head>
<body>
    <img class="logo" src="../../logo_small_icon_only.png" alt="logo_small_icon_only.png">
    <div class="content">
        <div class="mb-4 text-center">
            <?php
            
                if( isset($_GET['token']) && !empty($_GET['token']) ) {
                    $token = htmlentities(addslashes($_GET['token']));
                    $stmt = $pdo -> prepare('SELECT COUNT(*) FROM users WHERE token = ?');
                    $stmt -> execute([ $token ]);
                    if( $stmt -> fetchColumn() > 0 ) {
                        $stmt = $pdo -> prepare('SELECT * FROM users WHERE token = ?');
                        $stmt -> execute([ $token ]);
                        $row = $stmt -> fetchAll();
                        foreach($row as $rows) {
            ?>
                            <h2>Hola <?php echo $rows['name'] ?>!</h2>
                            <p>Tu cuenta con devicesIOT ha sido verificada con éxito.</p>
                            <p>Ya puedes iniciar sesión en tu cuenta e instalar tu primer dispositivo</p>
                            <h4>Que ganas!</h4>
                            <p>Haz click en el botón para iniciar sesón en tu cuenta. ¿A que esperas?</p>
                            <a href="https://freelsdevcamp.es/devicesIOT/index.html" class="btn btn-outline-light">Vamos Allá</a>
            <?php
                        }
                    }else {
            ?>
                        <h2 class="notFound">Page Not Found 404</h2>
            <?php
                    }
                }else {
            ?>
                    <h2 class="notFound">Page Not Found 404</h2>
            <?php
                }
            ?>
        </div>
    </div>
    <div class="footer">
        <p>Nos comprometemos continuamente a cumplir con las leyes de protección de datos aplicables y a garantizar un procesamiento justo y transparente de sus datos personales.
            Lea nuestra declaración de privacidad, incluido un aviso de información y una política de protección de datos, para obtener información detallada sobre nuestro sitio web.</p>
        <p>freelsdevcamp.es Derechos Reservados &copy; <span id="date"></span></p>
    </div>
    <script>
        const date = document.getElementById('date');
        date.innerHTML = new Date().getFullYear();
    </script>

    <script src="../../jquery/jquery.min.js"></script>
    <script src="../../popper.js/popper.min.js"></script>
    <script src="../../bootstrap/js/bootstrap.min.js"></script>
</body>
</html>