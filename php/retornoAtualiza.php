<?php
    if ($res = pg_query($conexao, $select)) {
        $arrayRes = pg_fetch_all($res);
        $arrayJson = json_encode( $arrayRes, JSON_UNESCAPED_UNICODE);
        
        if($arrayJson == "false")
            echo "1"; // Não existe esse usuario cadastrado.
        else
            echo $arrayJson;
    }
    else
        echo "2"; //Problema em buscar o dado da tabela.
?>