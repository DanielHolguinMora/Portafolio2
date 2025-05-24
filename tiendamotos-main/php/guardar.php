<?php

include("abre.php");

$Nombre       = $_POST['Nombre'];
$Email        = $_POST['Email'];
$Telefono     = $_POST['Telefono'];
$Mensaje      = $_POST['Mensaje'];

$consulta = "INSERT INTO clientes(Nombre, Email, Telefono, Mensaje) VALUES
('$Nombre', '$Email', '$Telefono', '$Mensaje')";

if( $conexion->query($consulta) === TRUE){
    header("Location: index.html");
}else{
    echo "Error: " . $consulta . "<br>" . $conexion->error;
} 

$conexion->close();

?>  