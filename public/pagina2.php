<?php

$nombre = $_POST['nombre']
$email = $_POST['email']
$asunto = $_POST['asunto']
$mensaje = $_POST['mensaje']

mail('morenoadrianh1.2@gmail.com', $nombre, $email, $asunto, $mensaje );
?>