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
    $id2 = $_GET['idcurso'];
    $id = 1;
    // Consulta para obtener las leccions del cuso con ID 1
    $sql = "SELECT * FROM lecciones WHERE id_curso = '$id2' ";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        // Curso encontrado, obtener los detalles del curso y enviarlos como respuesta JSON
        $curso = array();
        while($row = mysqli_fetch_assoc($result)) {
            $curso[] = $row;
        }
        echo json_encode(["success" => true, "curso" => $curso]);
    } else {
        // Curso no encontrado, enviar respuesta JSON con error
        echo json_encode(["success" => false, "message" => "Error al traer el curso"]);
    }
    mysqli_close($conn);
}
?>
