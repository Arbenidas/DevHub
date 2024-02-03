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

    // Consulta para verificar si el usuario existe
    $sql = "SELECT * FROM usuarios WHERE correo_electronico = '$username' AND contrasena = '$password'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // Usuario encontrado, enviar respuesta JSON con éxito
        echo json_encode(["success" => true]);
    } else {
        // Usuario no encontrado, enviar respuesta JSON con error
        echo json_encode(["success" => false, "message" => "Usuario o contraseña incorrectos."]);
    }
    $conn->close();
}
?>
