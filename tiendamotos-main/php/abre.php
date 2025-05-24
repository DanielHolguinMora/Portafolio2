<?php

$conexion = new mysqli("localhost", "root", "", "contactos");
    if($conexion){
        echo "La gestion fue exitosa!";

    }else{
        echo"Fallo la gestion";
    }

    ?>  