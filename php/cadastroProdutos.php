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
            echo "1";
        }
        else {
            echo "2";
        }
        
   }
    pg_close($conexao);
    
?>