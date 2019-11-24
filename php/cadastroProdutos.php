<?php
    include_once("./conexao.php");
    
    $tipoProd = $_POST["TipProd"];
    $marcaProd = $_POST["MarcaProd"];
    $valorProd = $_POST["ValorProd"];
    $qntProd = $_POST["QTDProd"];
    $tam = $_POST["select"];
    $id_fornecedor = $_POST["select1"];

    //Replace da virgula que foi colocada no front.
    $valorProd = str_replace(".", "", $valorProd);
    $valorProd = str_replace("," , ".", $valorProd);

   if ($conexao) {
        $insert = "select transacao_Compra_Fornecedor('".$tipoProd."','".$marcaProd."',".
        $valorProd.",'". $tam ."',". $qntProd .",".$id_fornecedor.");";
        if ($res = pg_send_query($conexao, $insert)) {
            $res1 = pg_get_result($conexao);
            $rows = pg_num_rows($res1);
            echo "$res1 has $rows records\n\n";
        }
        else {
            echo "Algo inesperado ocorreu";
        }
        
   }
    pg_close($conexao);
    
?>