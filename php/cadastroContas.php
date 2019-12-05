<?php
    include_once("./conexao.php");
    include_once("./contas.php");

    if ($conexao) {
        $insert = "insert into contas(descricao, vencimento, valor, pago) 
        values('".$desc."', '".$vencimento."',".$valor.",".$pago.");";
        
        if ($res = pg_query($conexao,$insert)) {
            echo "1";
        }
        else {
            echo "2";
        }
    }
    pg_close($conexao);
?>