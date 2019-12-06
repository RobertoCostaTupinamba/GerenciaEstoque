<?php

    include_once("./conexao.php");
    $cod = $_POST['cdg'];
    $parc = $_POST['parcela'];

    if ($conexao) {
        if (empty($cod) == false && empty($parc) == false) {
            $update = "update venda set parcelas_pagas = ".$parc."
            where id = ".$cod.";";

            if ($res = pg_query($conexao, $update)) {
                echo "1"; // Correto.
            }
            else {
                echo "881475246795313"; //Error;
            }
        }
        else {
            echo "2"; //Error;
        }
    }
    else {
        echo "2"; //Error;
    }
?>