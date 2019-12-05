<?php
    include_once("./conexao.php");
    include_once("./produtos.php");
    

    //Replace da virgula que foi colocada no front.
    include_once("./excluiMascara.php");

   if ($conexao) {
        $insert = "select transacao_Compra_Fornecedor('".$id_prod."','".$tipoProd."','".$marcaProd."',".
        $valor.",'". $tam ."',". $qntProd .",'".$id_fornecedor."');";

        if ($res = pg_query($conexao, $insert)) {
            echo "1"; // Tudo certo;
        }
        else {
            echo "2"; // Algo inesperado ocorreu;
        }
        
   }
    pg_close($conexao);
    
?>