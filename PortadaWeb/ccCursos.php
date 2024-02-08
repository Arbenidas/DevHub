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
    $id = 1;
    // Consulta para verificar si el usuario existe
    $sql = "SELECT * FROM cursos WHERE id = '$id' ";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // Usuario encontrado, enviar respuesta JSON con éxito
        echo json_encode(["success" => true]);
    } else {
        // Usuario no encontrado, enviar respuesta JSON con error
        echo json_encode(["success" => false, "message" => "Error al traer el curso"]);
    }
    $conn->close();
}
?>
