<?php
    $conexao = pg_connect("host=localhost port=5432 dbname=P1 user=postgres password=123");
    $tipoProd = $_POST['TipProd'];
    $marcaProd = $_POST['MarcaProd'];
    $valorProd = $_POST['ValorProd'];
    $qntProd = $_POST['QTDProd'];
    $tam = $_POST['select'];
    $id_fornecedor = $_POST['select1'];

   if ($conexao) {
        $insert = "select transacao_Compra_Fornecedor('".$tipoProd."', '".$marcaProd."' , ".
        $valorProd.", '". $tam ."', ". $qntProd .",".$id_fornecedor.");";
        $res = pg_send_query($conexao, $insert);
        $retorno = pg_get_result($conexao);
        if (pg_result_error_field($retorno, PGSQL_DIAG_SOURCE_FUNCTION) == '_bt_check_unique') {
			echo "Erro de chave primaria";
        }
        else {
            echo $retorno
        }

   }

    pg_close($conexao);
?>