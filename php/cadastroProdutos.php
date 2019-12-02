<?php
    include_once("./conexao.php");
    
    $id_prod = $_POST['CodProd'];
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
        $insert = "select transacao_Compra_Fornecedor('".$id_prod."','".$tipoProd."','".$marcaProd."',".
        $valorProd.",'". $tam ."',". $qntProd .",'".$id_fornecedor."');";
        //echo "$insert";
        if ($res = pg_query($conexao, $insert)) {
            echo "1" ;// Tudo certo;
        }
        else {
            echo "2" ;// Algo inesperado ocorreu;
        }
        
   }
    pg_close($conexao);
    
?>