<?php
    if ($res = pg_query($conexao, $update)) {
        echo "1"; // Tudo certo.
    }
    else {
        echo "3"; //Algo inesperado ocorreu;
    }
?>