<?php
    include_once("./conexao.php");
    include_once("./contas.php");
    $cdg = $_POST['cdg'];

    if ($conexao) {
        if (empty($desc) == true || empty($vencimento) == true || empty($valor) == true) {
            echo "2"; // Algum capo esta vazio.
        }
        else {
            $update = "update contas set descricao = '".$desc."', vencimento = '".$vencimento."'
            ,valor = ".$valor.", pago = ".$pago." where id = '".$cdg."';";
            
            include_once("./trataAtt.php");
        }
    }
?>