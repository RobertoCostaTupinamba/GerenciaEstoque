<?php
    if (strpos($valor, ",")) {
        $valor = str_replace(".", "", $valor);
        $valor = str_replace(",", ".", $valor);
    }
?>