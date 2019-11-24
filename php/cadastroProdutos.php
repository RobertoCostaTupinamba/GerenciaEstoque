<?php
    include_once("./conexao.php");
    $tipoProd = $_POST["TipProd"];
    $marcaProd = $_POST["MarcaProd"];
    $valorProd = $_POST["ValorProd"];
    $qntProd = $_POST["QTDProd"];
    $tam = $_POST["select"];
    $id_fornecedor = $_POST["select1"];

   if ($conexao) {
        $insert = "select transacao_Compra_Fornecedor('".$tipoProd."', '".$marcaProd."' , ".
        $valorProd.", '". $tam ."', ". $qntProd .",".$id_fornecedor.");";
        if (pg_send_query($conexao, $insert)) {
            echo "Good job";
        }
        else {
            echo "Fucoffe";
        }
        
   }
    pg_close($conexao);
    
?>