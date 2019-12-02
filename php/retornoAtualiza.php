<?php
    if ($res = pg_send_query($conexao, $select)) {
        $retorno = pg_get_result($conexao);
        $arrayRes = pg_fetch_all($res);
        $arrayJson = json_encode( $arrayRes, JSON_UNESCAPED_UNICODE);
        
        
        if (if (pg_result_error_field($retorno, PGSQL_DIAG_SOURCE_FUNCTION) == '_bt_check_unique') {
			echo "PK Repetida";
		}
        else if($arrayJson == "false")
            echo "1"; // Não existe esse usuario cadastrado.
        else
            echo $arrayJson;
    }
    else
        echo "2"; //Problema em buscar o dado da tabela.
?>