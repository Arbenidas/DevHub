<?php
header('Access-Control-Allow-Origin: *');
$servername = "localhost";
$username = "root";
$password = '';
$database = "devhub";

// Crear conexión
$conn = mysqli_connect($servername, $username, $password, $database);

// Verificar conexión
if (!$conn) {
    die("La conexión falló: " . mysqli_connect_error());
} else {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $caracteres=explode('@', $username);
    

    // Consulta para verificar si el usuario existe
    $sql = "INSERT INTO `usuarios` (`id_usuario`, `nombre`, `correo_electronico`, `contrasena`, `rol`) VALUES (NULL, '$caracteres[0]', '$username', '$password', 'estudiante');";
    $result = mysqli_query($conn, $sql);

    if (mysqli_affected_rows($conn) > 0) {
        // Usuario encontrado, enviar respuesta JSON con éxito
        echo json_encode(["success" => true]);
    } else {
        // Usuario no encontrado, enviar respuesta JSON con error
        echo json_encode(["success" => false, "message" => "Usuario o contraseña incorrectos."]);
    }
    $conn->close();
}
?>
